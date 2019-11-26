
// All assembly code to be inserted here.

	// Uncomment these three lines:
 	.section	__TEXT,__text,regular,pure_instructions
	.globl	_insert_node
 	.p2align	4, 0x90


_insert_node: # void insert_node(NODE *new_n)
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$32, %rsp 
	cmpq	$0, _root(%rip) #   if (root == NULL) {
	

	jne	NOT_NULL
	movq	%rdi, _root(%rip) # rdi is new_n in memory
	jmp	END
NOT_NULL:
	movq	_root(%rip), %rax 
	movq	%rax, %rbx
TOP:
	movq	%rdi, %rax
	movq	%rbx, %rcx
	cmpq	224(%rcx), %rax # if (new_n->person.id == p->person.id)
	jne	COMPARE_RES
	jmp	END
COMPARE_RES:
	movq	24(%rsp), %r8
	movq	%r8, %rdi

	addq	$116, %rdi
	movq	%rbx, %rsi
	addq	$116, %rsi
	pushq	%rdi
	pushq	%rsi
	subq	$32, %rsp
	callq	_strcmp
	movq	%rax, %rdx
	addq	$32, %rsp
	popq	%rsi
	popq	%rdi
	cmpq	$0, %rdx
	jne	RES_NOT_EQUAL
	movq	24(%rsp), %rdi
	addq	$16, %rdi
	movq	%rbx, %rsi
	addq	$16, %rsi
	pushq	%rdi
	pushq	%rsi
	subq	$32, %rsp
	callq	_strcmp
	movq	%rax, %rdx
	addq	$32, %rsp
	popq	%rsi
	popq	%rdi
RES_NOT_EQUAL:
	cmpl	$0, %edx
	jge	RES_GREATER_THAN
	movq	%rbx, %rax
	cmpq	$0, 216(%rax)
	jne	LEFT_CHILD_NOT_NULL
	movq	24(%rsp), %rax
	movq	%rbx, %rcx
	movq	%rax, 216(%rcx)
	jmp	END
LEFT_CHILD_NOT_NULL:
	movq	%rbx, %rax
	movq	216(%rax), %rax
	movq	%rax, %rbx
	jmp	RETURN_TOP
RES_GREATER_THAN:
	movq	%rbx, %rax
	cmpq	$0, 224(%rax)
	jne	RIGHT_CHILD_NOT_NULL
	movq	24(%rsp), %rax
	movq	%rbx, %rcx
	movq	%rax, 224(%rcx)
	jmp	END
RIGHT_CHILD_NOT_NULL:
	movq	%rbx, %rax
	movq	224(%rax), %rax
	movq	%rax, %rbx
	jmp	RETURN_TOP
RETURN_TOP:
	jmp	TOP
END:
	addq	$32, %rsp
	popq	%rbp
	retq


	// Uncomment these three lines:
	 .section	__TEXT,__text,regular,pure_instructions
	 .globl	_remove_smallest
	 .p2align	4, 0x90

_remove_smallest:					# NODE *remove_smallest()
	pushq	%rbp
	movq	%rsp, %rbp
	movq	_root(%rip), %rax
	cmpq	$0, %rax				# if (root == NULL)
	je	RETURN_NULL 				# return NULL;
	movq	216(%rax), %rcx
	cmpq	$0, %rcx
	je	LEFT_CHILD_NULL 			# if (root->left == NULL) {
TOP_2: 								# while (parent->left->left != NULL) 
	movq	%rax, %rdx 
	movq	%rcx, %rax
	movq	216(%rcx), %rcx 		# parent = parent->left;
	cmpq	$0, %rcx 				# parent->left->left != NULL
	jne	TOP_2 
	movq	224(%rax), %rcx 		# NODE *p = parent->left;
	movq	%rcx, 216(%rdx) 		# parent->left = parent->left->right;
	popq	%rbp
	retq
RETURN_NULL:
	movq	$0, %rax 				# move 0 into returned register NULL
	popq	%rbp
	retq
LEFT_CHILD_NULL: 
	movq	224(%rax), %rcx			# NODE *p = root;
	movq	%rcx, _root(%rip) 		# root = root->right;
	popq	%rbp
	retq


