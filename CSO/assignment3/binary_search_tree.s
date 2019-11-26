	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 10, 14	sdk_version 10, 14
	.globl	_new_node               ## -- Begin function new_node
	.p2align	4, 0x90
_new_node:                              ## @new_node
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	pushq	%rbx
	pushq	%rax
	.cfi_offset %rbx, -24
	movl	$232, %edi
	callq	_malloc
	movq	%rax, %rbx
	movaps	16(%rbp), %xmm0
	movups	%xmm0, (%rax)
	leaq	16(%rax), %rdi
	leaq	32(%rbp), %rsi
	movl	$100, %edx
	callq	___strcpy_chk
	leaq	116(%rbx), %rdi
	leaq	132(%rbp), %rsi
	movl	$100, %edx
	callq	___strcpy_chk
	movq	$0, 224(%rbx)
	movq	$0, 216(%rbx)
	movq	%rbx, %rax
	addq	$8, %rsp
	popq	%rbx
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.globl	_insert_node            ## -- Begin function insert_node
	.p2align	4, 0x90
_insert_node:                           ## @insert_node
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	pushq	%r15
	pushq	%r14
	pushq	%r13
	pushq	%r12
	pushq	%rbx
	pushq	%rax
	.cfi_offset %rbx, -56
	.cfi_offset %r12, -48
	.cfi_offset %r13, -40
	.cfi_offset %r14, -32
	.cfi_offset %r15, -24
	movq	%rdi, %r14
	movq	_root(%rip), %rbx
	testq	%rbx, %rbx
	je	LBB1_12
## %bb.1:
	movq	(%r14), %r13
	cmpq	(%rbx), %r13
	je	LBB1_11
## %bb.2:
	leaq	116(%r14), %r12
	leaq	16(%r14), %r15
	.p2align	4, 0x90
LBB1_3:                                 ## =>This Inner Loop Header: Depth=1
	leaq	116(%rbx), %rsi
	movq	%r12, %rdi
	callq	_strcmp
	testl	%eax, %eax
	je	LBB1_4
## %bb.5:                               ##   in Loop: Header=BB1_3 Depth=1
	testl	%eax, %eax
	js	LBB1_6
LBB1_8:                                 ##   in Loop: Header=BB1_3 Depth=1
	movq	224(%rbx), %rax
	testq	%rax, %rax
	jne	LBB1_10
	jmp	LBB1_9
	.p2align	4, 0x90
LBB1_4:                                 ##   in Loop: Header=BB1_3 Depth=1
	leaq	16(%rbx), %rsi
	movq	%r15, %rdi
	callq	_strcmp
	testl	%eax, %eax
	jns	LBB1_8
LBB1_6:                                 ##   in Loop: Header=BB1_3 Depth=1
	movq	216(%rbx), %rax
	testq	%rax, %rax
	je	LBB1_7
LBB1_10:                                ##   in Loop: Header=BB1_3 Depth=1
	movq	%rax, %rbx
	cmpq	(%rax), %r13
	jne	LBB1_3
	jmp	LBB1_11
LBB1_12:
	movq	%r14, _root(%rip)
	jmp	LBB1_11
LBB1_9:
	movq	%r14, 224(%rbx)
	jmp	LBB1_11
LBB1_7:
	movq	%r14, 216(%rbx)
LBB1_11:
	addq	$8, %rsp
	popq	%rbx
	popq	%r12
	popq	%r13
	popq	%r14
	popq	%r15
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.globl	_debug_print            ## -- Begin function debug_print
	.p2align	4, 0x90
_debug_print:                           ## @debug_print
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	leaq	L_str(%rip), %rdi
	popq	%rbp
	jmp	_puts                   ## TAILCALL
	.cfi_endproc
                                        ## -- End function
	.globl	_insert_employee        ## -- Begin function insert_employee
	.p2align	4, 0x90
_insert_employee:                       ## @insert_employee
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	pushq	%r15
	pushq	%r14
	pushq	%r13
	pushq	%r12
	pushq	%rbx
	subq	$232, %rsp
	.cfi_offset %rbx, -56
	.cfi_offset %r12, -48
	.cfi_offset %r13, -40
	.cfi_offset %r14, -32
	.cfi_offset %r15, -24
	movq	___stack_chk_guard@GOTPCREL(%rip), %rax
	movq	(%rax), %rax
	movq	%rax, -48(%rbp)
	leaq	-272(%rbp), %rdi
	leaq	16(%rbp), %rsi
	movl	$216, %edx
	callq	_memcpy
	movl	$232, %edi
	callq	_malloc
	movq	%rax, %r15
	movaps	-272(%rbp), %xmm0
	movups	%xmm0, (%rax)
	leaq	16(%rax), %r14
	leaq	-256(%rbp), %rsi
	movl	$100, %edx
	movq	%r14, %rdi
	callq	___strcpy_chk
	leaq	116(%r15), %r12
	leaq	-156(%rbp), %rsi
	movl	$100, %edx
	movq	%r12, %rdi
	callq	___strcpy_chk
	movq	$0, 224(%r15)
	movq	$0, 216(%r15)
	movq	_root(%rip), %rbx
	testq	%rbx, %rbx
	je	LBB3_12
## %bb.1:
	movq	(%r15), %r13
	cmpq	(%rbx), %r13
	je	LBB3_10
	.p2align	4, 0x90
LBB3_2:                                 ## =>This Inner Loop Header: Depth=1
	leaq	116(%rbx), %rsi
	movq	%r12, %rdi
	callq	_strcmp
	testl	%eax, %eax
	je	LBB3_3
## %bb.4:                               ##   in Loop: Header=BB3_2 Depth=1
	testl	%eax, %eax
	js	LBB3_5
LBB3_7:                                 ##   in Loop: Header=BB3_2 Depth=1
	movq	224(%rbx), %rax
	testq	%rax, %rax
	jne	LBB3_9
	jmp	LBB3_8
	.p2align	4, 0x90
LBB3_3:                                 ##   in Loop: Header=BB3_2 Depth=1
	leaq	16(%rbx), %rsi
	movq	%r14, %rdi
	callq	_strcmp
	testl	%eax, %eax
	jns	LBB3_7
LBB3_5:                                 ##   in Loop: Header=BB3_2 Depth=1
	movq	216(%rbx), %rax
	testq	%rax, %rax
	je	LBB3_6
LBB3_9:                                 ##   in Loop: Header=BB3_2 Depth=1
	movq	%rax, %rbx
	cmpq	(%rax), %r13
	jne	LBB3_2
	jmp	LBB3_10
LBB3_12:
	movq	%r15, _root(%rip)
	jmp	LBB3_10
LBB3_8:
	movq	%r15, 224(%rbx)
	jmp	LBB3_10
LBB3_6:
	movq	%r15, 216(%rbx)
LBB3_10:
	movq	___stack_chk_guard@GOTPCREL(%rip), %rax
	movq	(%rax), %rax
	cmpq	-48(%rbp), %rax
	jne	LBB3_13
## %bb.11:
	addq	$232, %rsp
	popq	%rbx
	popq	%r12
	popq	%r13
	popq	%r14
	popq	%r15
	popq	%rbp
	retq
LBB3_13:
	callq	___stack_chk_fail
	.cfi_endproc
                                        ## -- End function
	.globl	_remove_employee        ## -- Begin function remove_employee
	.p2align	4, 0x90
_remove_employee:                       ## @remove_employee
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	pushq	%r14
	pushq	%rbx
	.cfi_offset %rbx, -32
	.cfi_offset %r14, -24
	movq	%rdi, %r14
	xorl	%ebx, %ebx
	xorl	%eax, %eax
	callq	_remove_smallest
	testq	%rax, %rax
	je	LBB4_1
## %bb.2:
	movl	$216, %edx
	movq	%r14, %rdi
	movq	%rax, %rsi
	callq	_memcpy
	jmp	LBB4_3
LBB4_1:
	movl	$1, %ebx
LBB4_3:
	movl	%ebx, %eax
	popq	%rbx
	popq	%r14
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.globl	_root                   ## @root
.zerofill __DATA,__common,_root,8,3
	.section	__TEXT,__cstring,cstring_literals
L_str:                                  ## @str
	.asciz	"In debug_print"


.subsections_via_symbols
