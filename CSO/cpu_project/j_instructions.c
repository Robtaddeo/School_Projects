#include "i_instructions.h"
#include "cpu.h"
#include "utilities.h"
#include <stdio.h>

#define op_field(x) ((x >> 26) & 0x1F);
#define add_field(x) ((x >> 0) & 0x1FFFFFF);

void j(unsigned int instruction)
{
    int address = add_field(instruction);
    npc = ((pc+4) & 0xf0000000) | (address << 2);
}

void jal(unsigned int instruction)
{
    registers[31] = pc + 4;
    int address = add_field(instruction);
    npc = ((pc + 4) &  0xf0000000) | (address << 2);
}
