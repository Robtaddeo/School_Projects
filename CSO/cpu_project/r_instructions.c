#include "r_instructions.h"
#include "cpu.h"
#include "utilities.h"
#include <stdio.h>

#define opcode_field(x) (x >> 26);
#define rs_field(x) ((x >> 21) & 0x1F);
#define rt_field(x) ((x >> 16) & 0x1F);
#define rd_field(x) ((x >> 11) & 0x1F);
#define shamt_field(x) ((x >> 6) & 0x1F);
#define funct_field(x) ((x >> 0) & 0x2F);

// adds signed ints stored in rt and rs registers. inputs result into rd register
void add(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = registers[rt] + registers[rs];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

// adds unsigned ints stored in rt and rs registers. inputs result into rd register
void addu(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned int tmp = (unsigned int)registers[rt] + (unsigned int)registers[rs];
    int rd = rd_field(instruction);
    registers[rd] = (signed int)tmp;
}

// subtracts signed ints stored in rt and rs registers. inputs result into rd register
void sub(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = registers[rs] - registers[rt];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
   
}

// subtracts unsigned ints stored in rt and rs registers. inputs result into rd register
void subu(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned int tmp = (unsigned int)registers[rs] - (unsigned int)registers[rt];
    int rd = rd_field(instruction);
    registers[rd] = (signed int)tmp;
}

// multiplies signed ints stored in rt and rs registers. inputs result into rd register
void mult(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    long res = (long) registers[rt] * (long) registers[rs];
    HI = (int)((res >> 32) & 0xFFFFFFFF);
    LO = (int)((res >> 0) & 0xFFFFFFFF);
}

// subtracts unsigned ints stored in rt and rs registers. inputs result into rd register
void multu(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    long res = (unsigned long) registers[rt] * (unsigned long) registers[rs];
    HI = (signed int)((res >> 32) & 0xFFFFFFFF);
    LO = (signed int)((res >> 0) & 0xFFFFFFFF);
}

// divides signed ints stored in rt and rs registers. inputs result into rd register
void div(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int rs_val = registers[rs];
    signed int rt_val = registers[rt];
    signed int tmp =  rs_val / rt_val;
    signed int tmp_r = rs_val % rt_val;
    LO = tmp;
    HI = tmp_r;
}

// divides unsigned ints stored in rt and rs registers. inputs result into rd register
void divu(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    unsigned int rs_val = (unsigned int)registers[rs];
    unsigned int rt_val = (unsigned int)registers[rt];
    signed int tmp =  rs_val / rt_val;
    signed int tmp_r = rs_val % rt_val;
    LO = tmp;
    HI = tmp_r;
}

void and(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = registers[rt] & registers[rs];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void nor(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = ~(registers[rt] | registers[rs]);
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void or(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = registers[rt] | registers[rs];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void xor(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    int tmp = registers[rt] ^ registers[rs];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void sll(unsigned int instruction){
    int rt = rt_field(instruction);
    signed int tmp = registers[rt] << shamt_field(instruction);
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void sllv(unsigned int instruction){
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    // printf("%s -> %i \n", "(num) registers[rs]", registers[rs]);
    // printf("%s -> %i \n", "(shift) registers[rt]", registers[rt]);
    signed int tmp = registers[rs] << registers[rt];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void srl(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int shift = shamt_field(instruction);
    signed int tmp = registers[rt] >> shift;
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void sra (unsigned int instruction)
{
    int rd = rd_field(instruction);
    int rt = rt_field(instruction);
    int shift = shamt_field(instruction);
    int sign = (registers[rt] >> 31);
    if(sign)
    {
        signed int temp = registers[rt] >> shift;
        int mask = (1 >> shift) - 1;
        temp = temp | mask << (32 - shift);
        registers[rd] = temp;

    }
    else {
        signed int temp = registers[rt] >> shift;
        registers[rd] = temp;
    }

}

void srlv(unsigned int instruction)
{
    int rt = rt_field(instruction);
    int rs = rs_field(instruction);
    signed int tmp = registers[rs] >> registers[rt];
    int rd = rd_field(instruction);
    registers[rd] = tmp;
}

void srav (unsigned int instruction)
{
    int rd = rd_field(instruction);
    int rs = rs_field(instruction);
    int rt = rt_field(instruction);
    int sign = (registers[rs] >> 31);
    if(sign)
    {
        signed int temp = registers[rs] >> registers[rt];
        int mask = (1 >> registers[rt]) - 1;
        temp = temp | mask << (32 - registers[rt]);
        registers[rd] = temp;

    }
    else {
        signed int temp = registers[rs] >> registers[rt];
        registers[rd] = temp;
    }

}

void slt (unsigned int instruction)
{
    int rs = rs_field(instruction);
    int rt = rt_field(instruction);
    int rd = rd_field(instruction);
    int rs_value = registers[rs];
    int rt_value = registers[rt];
    if (rs_value < rt_value)
    {
        registers[rd] = 1;
    }
    else
    {
        registers[rd] = 0;
    }
}

void sltu (unsigned int instruction)
{
    int rs = rs_field(instruction);
    int rt = rt_field(instruction);
    int rd = rd_field(instruction);
    int rs_value = (unsigned int)registers[rs];
    int rt_value = (unsigned int)registers[rt];
    if (rs_value < rt_value)
    {
        registers[rd] = 1;
    }
    else
    {
        registers[rd] = 0;
    }
}

void jr(unsigned int instruction)
{
    int rs = rs_field(instruction);
    npc = registers[rs];
}

void jalr(unsigned int instruction)
{
    registers[31] = pc + 4;
    int rs = rs_field(instruction);
    npc = registers[rs];
}

void mfhi(unsigned int instruction)
{
    int rd = rd_field(instruction);
    registers[rd] = HI;
}

void mflo(unsigned int instruction)
{
    int rd = rd_field(instruction);
    registers[rd] = LO;
}


