---
layout: post
title: "Understanding Functions"
author: "Alex"
date: 2024-10-13
tags:
  - functions
  - mathematics
  - discrete
  - 2300
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Functions

## Domain, Codomain, and Function

A **function** is a relation between two sets that associates each element of the first set with exactly one element of the second set. In LaTeX, this is written as:

$$
f: A \to B
$$

- **Domain**: The set $A$ is called the **domain** of the function $f$. It is the set of all possible inputs.
- **Codomain**: The set $B$ is called the **codomain** of the function $f$. It is the set of all possible outputs (not necessarily actual outputs).
- **Function**: The function $f$ maps each element $a \in A$ to a unique element $f(a) \in B$.

```python
import random
A = set(range(1,5)) # The domain 
B = set(range(1,10)) # The codomain

def f(x):
    ''' 
    f is function from A to B
    it takes as input, elements of A and returns elements of B
    Domain: A
    Codomain: B
    '''
    return 2 * x

Domain = A
Codomain = B

x = random.choice(list(A))
f(x)
```

If $f(a) = b$, we say that $b$ is the **image** of $a$, and $a$ is a **preimage** of $b$. The **range** of $f$ is the set of all images of elements of **A**.

$$
Range = \{f(x):x \in A\}
$$

So 
$$
y \in Range \iff y = f(x) \text{ for some } x \in A
$$

```python
# The range of f is all the values in the codomain that are mapped to
Range = set([f(x) for x in A])
Range
```

---

## Surjective (Onto)

A function $f: A \to B$ is called **surjective** (or onto) if for every element $b \in B$, there exists at least one element $a \in A$ such that:

$$
f(a) = b
$$

In other words, the function covers the entire codomain.

When $f:A\to B$ is a surjection the following predicate is True:
$$
\forall y \in B, y \in Range
$$

```python
def is_surjective(f, A, B):
    '''Tests if a function with domain A and codomain B is surjective'''
    Range = set([f(x) for x in A])
    if len(B - Range) == 0:
        return True
    return False

A = set(range(1, 5))
B = set(range(2, 10, 2))
is_surjective(f, A, B)
```

---

## Injective (One-to-One)

A function $f: A \to B$ is called **injective** (or one-to-one) if for every pair of distinct elements $a_1, a_2 \in A$, their images under the function are distinct:

$$
f(a_1) \neq f(a_2)
$$

```python
def is_injective(f, A, B):
    '''Tests if a function with domain A and codomain B is injective'''
    Range = set([f(x) for x in A])
    if len(Range) < len(A):
        return False
    return True

A = set(range(0, 4))
B = set(range(0, 4))
is_injective(f, A, B)
```

---

## Bijective (Both Surjective and Injective)

A function $f: A \to B$ is called **bijective** if it is both **injective** and **surjective**. This means that every element of the codomain is the image of exactly one element of the domain.

```python
def is_bijective(f, A, B):
    return is_surjective(f, A, B) and is_injective(f, A, B)

A = set(range(1, 100))
B = set(range(3, 300, 3))

def f(x):
    return 3 * x

is_bijective(f, A, B)
```

---

## Composition of Functions

The **composition** of two functions $f: A \to B$ and $g: B \to C$ is a new function $g \circ f: A \to C$, defined by:

$$
(g \circ f)(x) = g(f(x))
$$

```python
def f(x: str) -> int:
    return len(x)

def g(x: int) -> bool:
    return x % 2 == 0

g(f('beans'))
```

---

## Inverse of a Function

A function $f: A \to B$ has an **inverse** if there exists a function $f^{-1}: B \to A$ such that for every $a \in A$ and $b \in B$:

$$
f(f^{-1}(b)) = b \quad \text{and} \quad f^{-1}(f(a)) = a
$$

A function has an inverse if and only if it is **bijective**.

```python
def define_inverse(f, A, B):
    def inverse(y):
        inverse_dict = {f(x): x for x in A}
        return inverse_dict[y]
    return inverse

A = set(range(-2, 2))
B = set(range(0, 2))
f_inv = define_inverse(f, A, B)
f_inv(f(1))
```

---

## Proof of Surjectivity

To prove that a function $f: A \to B$ is surjective, you must show that for every element $b \in B$, there is some element $a \in A$ such that $f(a) = b$.

**Example**:

Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = 2x + 3$. Prove that $f$ is surjective.

- **Proof**: Let $y \in \mathbb{R}$. We need to find $x \in \mathbb{R}$ such that $f(x) = y$.
  - Solving $f(x) = y$, we get $y = 2x + 3$, so $x = \frac{y - 3}{2}$.
  - Since $x$ exists for every $y \in \mathbb{R}$, the function is surjective.

---

## Proof of Injectivity

To prove that a function $f: A \to B$ is injective, you must show that if $f(a_1) = f(a_2)$, then $a_1 = a_2$.

**Example**:

Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = 2x + 3$. Prove that $f$ is injective.

- **Proof**: Assume $f(a_1) = f(a_2)$.
  - Then $2a_1 + 3 = 2a_2 + 3$.
  - Subtracting 3 from both sides, we get $2a_1 = 2a_2$.
  - Dividing by 2, we get $a_1 = a_2$.
  - Hence, the function is injective.
