#include "cpu.h"
#include "utilities.h"
#include <stdio.h>
#include "i_instructions.h"
#include "j_instructions.h"
#include "r_instructions.h"


#define opcode_field(x) ((x >> 26) & 0x3F); // opcode bits
#define funct_field(x) ((x >> 0) & 0x3F); // funct bits


int done = 0;
unsigned int registers[NUM_REGISTERS];

//pc holds the current value of the PC (program counter). 
//IMPORTANT: pc may be read by an instruction, but should not 
//be modified by an instruction.
 unsigned int pc;  
//npc is the value that the PC will be assigned to once the current
//instruction is completed. A jump or branch instruction should modify
//the value of npc if the jump or branch is taken.  If an instruction
//does not assign a value to npc, it will be given the value of
//pc+4.  IMPORTANT: npc may be modified by an instruction (but only
//by jump or branch), but it should not be read by an instruction.
 unsigned int npc;

//HI and LO are the registers assigned by the MULT and DIV instructions
//and read by the MFHI and MFLO instructions.
 unsigned int HI;
 unsigned int LO;

//Memory is an array of bytes (not words).
 unsigned char memory[MEMORY_SIZE_IN_BYTES];
// //Memory is an array of bytes (not words).

#define ADD_OPCODE 0x20
#define ADDU_OPCODE 0x21
#define SUB_OPCODE 0x22
#define SUBU_OPCODE 0x23
#define MULT_OPCODE 0x18
#define MULTU_OPCODE 0x19
#define DIV_OPCODE 0x1a
#define DIVU_OPCODE 0x1b
#define MFHI_OPCODE 0x10
#define MFLO_OPCODE 0x12
#define AND_OPCODE 0x24
#define OR_OPCODE 0x25
#define XOR_OPCODE 0x26
#define NOR_OPCODE 0x27
#define SLT_OPCODE 0x2a
#define SLTU_OPCODE 0x2b
#define SLL_OPCODE 0x00
#define SLLV_OPCODE 0x04
#define SRL_OPCODE 0x02
#define SRLV_OPCODE 0x06
#define SRA_OPCODE 0x03
#define SRAV_OPCODE 0x07
#define JR_OPCODE 0x08
#define JALR_OPCODE 0x09
#define SYSCALL_OPCODE 0x0c

#define ADDI_OPCODE 0x08
#define ADDIU_OPCODE 0x09
#define LW_OPCODE 0x23
#define LH_OPCODE 0x21
#define LHU_OPCODE 0x25
#define LB_OPCODE 0x20
#define LBU_OPCODE 0x24
#define SW_OPCODE 0x2b
#define SH_OPCODE 0x29
#define SB_OPCODE 0x28
#define LUI_OPCODE 0x0f
#define ORI_OPCODE 0x0d
#define ANDI_OPCODE 0x0c
#define XORI_OPCODE 0x0e
#define SLTI_OPCODE 0x0a
#define SLTIU_OPCODE 0x0b
#define BEQ_OPCODE 0x04
#define BNE_OPCODE 0x05
#define J_OPCODE 0x02
#define JAL_OPCODE 0x03

void handle_r_instructions(int instruction)
{
    int funct = funct_field(instruction);
    switch (funct)
    {
    case ADD_OPCODE:
        add(instruction);
        break;
    case ADDU_OPCODE:
        addu(instruction);
        break;
    case SUB_OPCODE:
        sub(instruction);
        break;
    case SUBU_OPCODE:
        subu(instruction);
        break;
    case MULT_OPCODE:
        mult(instruction);
        break;
    case MULTU_OPCODE:
        multu(instruction);
        break;
    case DIV_OPCODE:
        div(instruction);
        break;
    case DIVU_OPCODE:
        divu(instruction);
        break;
    case MFHI_OPCODE:
        mfhi(instruction);
        break;
    case MFLO_OPCODE:
        mflo(instruction);
        break;
    case AND_OPCODE:
        and(instruction);
        break;
    case OR_OPCODE:
        or(instruction);
        break;
    case XOR_OPCODE:
        xor(instruction);
        break;
    case NOR_OPCODE:
        nor(instruction);
        break;
    case SLT_OPCODE:
        slt(instruction);
        break;
    case SLTU_OPCODE:
        sltu(instruction);
        break;
    case SLL_OPCODE:
        sll(instruction);
        break;
    case SLLV_OPCODE:
        sllv(instruction);
        break;
    case SRL_OPCODE:
        srl(instruction);
        break;
    case SRLV_OPCODE:
        srlv(instruction);
        break;
    case SRA_OPCODE:
        sra(instruction);
        break;
    case SRAV_OPCODE:
        srav(instruction);
        break;
    case JR_OPCODE:
        jr(instruction);
        break;
    case JALR_OPCODE:
        jalr(instruction);
        break;
    case SYSCALL_OPCODE:
        syscall(instruction);
        break;
    }

}

void cpu_initialize()
{
    pc = CODE_STARTING_ADDRESS;
    npc = CODE_STARTING_ADDRESS;
    registers[29] = STACK_STARTING_ADDRESS;
    registers[0] = 0;
}

void cpu_execute()
{
    done = 0;
    while(done == 0)
    {
        pc = npc;
        npc = npc + 4;
        unsigned int *instruction = (unsigned int *) &(memory[pc]);
        int opcode = opcode_field(*instruction);

        switch (opcode)
        {
        case 0:
            handle_r_instructions(*instruction);
            break;
        case ADDI_OPCODE:
            addi(*instruction);
            break;
        case ADDIU_OPCODE:
            addiu(*instruction);
            break;
        case LW_OPCODE:
            lw(*instruction);
            break;
        case LH_OPCODE:
            lh(*instruction);
            break;
        case LHU_OPCODE:
            lhu(*instruction);
            break;
        case LB_OPCODE:
            lb(*instruction);
            break;
        case LBU_OPCODE:
            lbu(*instruction);
            break;
        case SW_OPCODE:
            sw(*instruction);
            break;
        case SH_OPCODE:
            sh(*instruction);
            break;
        case SB_OPCODE:
            sb(*instruction);
            break;
        case LUI_OPCODE:         
            lui(*instruction);
            break;
        case ORI_OPCODE:
            ori(*instruction);
            break;
        case ANDI_OPCODE:
            andi(*instruction);
            break;
        case XORI_OPCODE:
            xori(*instruction);
            break;
        case SLTI_OPCODE:
            slti(*instruction);
            break;
        case SLTIU_OPCODE:
            sltiu(*instruction);
            break;
        case BEQ_OPCODE:
            beq(*instruction);
            break;
        case BNE_OPCODE:
            bne(*instruction);
            break;
        case J_OPCODE:
            j(*instruction);
            break;
        case JAL_OPCODE:
            jal(*instruction);
            break;
        }
    }
    // printf("\n");
}

void cpu_exit(int errorcode)
{
    if (errorcode == 0)
    {
        printf("\nProgram terminated normally \n");
        done = 1;
        return;
    }
    else
    {
        printf("\nProgram terminated with error: %d\n", errorcode);
        done = 1;
        return;
    }
}

