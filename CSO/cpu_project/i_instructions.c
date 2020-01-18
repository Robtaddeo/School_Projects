#include "i_instructions.h"
#include "cpu.h"
#include "utilities.h"
#include <stdio.h>

#define opcode_field(x) (x >> 26); // opcode bits
#define rs_field(x) ((x >> 21) & 0x1F); // rs bits
#define rt_field(x) ((x >> 16) & 0x1F); // rt bits
#define imm_field(x) ((x >> 0) & 0xFFFF); // immediate field bits


int sign_extend(unsigned int num)
{
    int sign = num >> 15;
    if(sign){
        num = num + 0xFFFF0000;
    }
    return num;
}

int sign_extend_8(unsigned int num)
{
    int sign = num >> 7;
    if(sign){
        num = num + 0xFFFFFF00;
    }
    return num;
}

void addi(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    int tmp = registers[rs] + sign_extend(imm);
    registers[rt] = tmp;
}

void addiu(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    int tmp = (unsigned int)registers[rs] + (unsigned int)sign_extend(imm);
    registers[rt] = tmp;
}

void lw(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    unsigned int *temp = (unsigned int *) &memory[registers[rs] + sign_extend(imm)];
    registers[rt] = *temp;
}

void lh(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    imm = sign_extend(imm);
    int word = registers[rs] + imm;
    short *tmp = (short *) &memory[word];
    registers[rt] = *tmp;
}

void lhu(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    imm = sign_extend(imm);
    int word = registers[rs] + imm;
    unsigned short *tmp = (unsigned short *) &memory[word];
    registers[rt] = *tmp;
}

void lb(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    imm = sign_extend(imm);
    int word = registers[rs] + imm;
    int tmp = memory[word];
    registers[rt] = sign_extend_8(memory[word]);
}

void lbu(unsigned int instruction) // fix this
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    unsigned int tmp = memory[registers[rs] + sign_extend(imm)];
    registers[rt] = tmp;
}

void sw(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    unsigned int *p = (unsigned int *) &memory[registers[rs] + sign_extend(imm)];
    *p = registers[rt];
}

void sh(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    unsigned short *p = (unsigned short *) &memory[registers[rs] + sign_extend(imm)];
    *p = registers[rt];
}

void sb(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    memory[registers[rs] + sign_extend(imm)] = registers[rt];
}

void lui(unsigned int instruction)
{   
    int rt = rt_field(instruction);
    unsigned short imm = imm_field(instruction);
    int tmp = (imm << 16);
    registers[rt] = tmp;
}

void ori(unsigned int instruction)
{
    // print_bits(instruction);
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    registers[rt] = (registers[rs] | imm);
}

void andi(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    registers[rt] = registers[rs] & imm;
}

void xori(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    registers[rt] = registers[rs] ^ imm;
}

void slti(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    int rs_value = registers[rs];
    if(rs_value < sign_extend(imm))
    {
        registers[rt] = 1;
    }
    else
    {
        registers[rt] = 0;
    }
}

void sltiu(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned short imm = imm_field(instruction);
    int rs_value = (unsigned int)registers[rs];
    if(rs_value < (unsigned int)sign_extend(imm))
    {
        registers[rt] = 1;
    }
    else
    {
        registers[rt] = 0;
    }
}

void beq(unsigned int instruction)
{
    int rt = rt_field(instruction);
    unsigned short imm = imm_field(instruction);
    int rs = rs_field(instruction);
    if(registers[rt] == registers[rs])
    {
        npc = pc + 4 + (sign_extend(imm) << 2);
    }
}

void bne(unsigned int instruction)
{
    int rt = rt_field(instruction);
    unsigned short imm = imm_field(instruction);
    int rs = rs_field(instruction);
    if(registers[rt] != registers[rs])
    {
        npc = pc + 4 + (sign_extend(imm) << 2);
    }
}




