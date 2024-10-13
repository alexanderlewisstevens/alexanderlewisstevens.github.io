---
layout: post
title: "Logic Recap"
author: "Alex"
title: "Understanding Truth Tables in Logic"
date: 2024-10-11
tags:
  - logic
  - mathematics
  - truth-tables
  - discrete
  - 2300
---

<video width="320" height="240" controls>
  <source src="assets/AlexTransformation.mp4">
  Your browser does not support the video tag.
</video>

# Understanding Truth Tables in Logic

![Screenshot of Truth Table](/assets/Screenshot.png)

Truth tables are an essential concept in logic, helping us evaluate logical expressions based on the truth values of their components. A truth table shows all possible truth values of logical variables and the results of logical operators (such as AND, OR, NOT, etc.).

## Basic Components of a Truth Table

Each row of a truth table represents a possible combination of truth values for the logical variables involved. Logical operators operate on these values and produce a result, allowing us to evaluate the entire expression.

### Common Logical Operators:
1. **NOT (¬ or ~)**: Negates the truth value.
2. **AND (∧)**: True if both operands are true.
3. **OR (∨)**: True if at least one operand is true.
4. **IMPLICATION (→)**: True unless the first operand is true and the second is false.
5. **BICONDITIONAL (↔)**: True if both operands are either true or false.

---

## Example 1: Simple AND Table

Let's start with a simple example using the AND (∧) operator between two variables `P` and `Q`.

| P   | Q   | P ∧ Q |
| --- | --- | ----- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | F     |
| F   | F   | F     |

### Explanation:
- **P ∧ Q** is only true when both `P` and `Q` are true.

---

## Example 2: Truth Table with NOT and OR

Now, we will add the NOT operator and evaluate the expression **¬P ∨ Q** (NOT P OR Q).

| P   | Q   | ¬P  | ¬P ∨ Q |
| --- | --- | --- | ------- |
| T   | T   | F   | T       |
| T   | F   | F   | F       |
| F   | T   | T   | T       |
| F   | F   | T   | T       |

### Explanation:
- **¬P** negates the value of `P`.
- **¬P ∨ Q** evaluates to true if either ¬P or Q is true.
- Therefore, when `P` is true, `¬P` is false, and we need to rely on the value of `Q`.

---

## Example 3: Implication (P → Q)

In this example, we'll look at the **implication** operator (→), which is true in all cases except when `P` is true and `Q` is false.

| P   | Q   | P → Q |
| --- | --- | ----- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | T     |
| F   | F   | T     |

### Explanation:
- **P → Q** is only false when `P` is true, and `Q` is false. This is often referred to as "if P, then Q".

---

## Example 4: More Complex Expression: (P ∧ Q) → (¬P ∨ R)

Now let’s move to a more complex expression: **(P ∧ Q) → (¬P ∨ R)**.

| P   | Q   | R   | P ∧ Q | ¬P  | ¬P ∨ R | (P ∧ Q) → (¬P ∨ R) |
| --- | --- | --- | ----- | --- | ------ | ------------------ |
| T   | T   | T   | T     | F   | T      | T                  |
| T   | T   | F   | T     | F   | F      | F                  |
| T   | F   | T   | F     | F   | T      | T                  |
| T   | F   | F   | F     | F   | F      | T                  |
| F   | T   | T   | F     | T   | T      | T                  |
| F   | T   | F   | F     | T   | T      | T                  |
| F   | F   | T   | F     | T   | T      | T                  |
| F   | F   | F   | F     | T   | T      | T                  |

### Explanation:
- We evaluate `P ∧ Q`, which is true only if both `P` and `Q` are true.
- Then, we calculate `¬P`, and `¬P ∨ R` (true if either ¬P or R is true).
- Finally, **(P ∧ Q) → (¬P ∨ R)** is an implication, so it's only false if `P ∧ Q` is true and `¬P ∨ R` is false.

---

## Example 5: Biconditional: P ↔ (Q ∧ R)

In this example, we’ll explore the **biconditional** operator (↔), which is true when both sides of the equation have the same truth value.

| P   | Q   | R   | Q ∧ R | P ↔ (Q ∧ R) |
| --- | --- | --- | ----- | ------------ |
| T   | T   | T   | T     | T            |
| T   | T   | F   | F     | F            |
| T   | F   | T   | F     | F            |
| T   | F   | F   | F     | F            |
| F   | T   | T   | T     | F            |
| F   | T   | F   | F     | T            |
| F   | F   | T   | F     | T            |
| F   | F   | F   | F     | T            |

### Explanation:
- **P ↔ (Q ∧ R)** is true if both `P` and `Q ∧ R` have the same truth value. When `P` is true, `Q ∧ R` must also be true for the biconditional to hold. If `P` is false, the expression is true if `Q ∧ R` is also false.

---

## How to Construct a Truth Table

Here are the steps to construct a truth table:

1. **List all the variables**: For a logical expression, list all the variables (P, Q, R, etc.).
2. **Determine possible combinations**: Each variable can either be true (T) or false (F). The number of rows in your table will be \(2^n\), where \(n\) is the number of variables.
3. **Evaluate the expression step by step**: Break down the logical expression into its components (e.g., evaluate ¬P, P ∧ Q, etc.).
4. **Fill in the truth table**: For each combination of truth values, compute the result of the entire expression.

---

## Conclusion

Truth tables are a powerful way to evaluate logical expressions. By systematically listing all possible combinations of truth values for variables and applying logical operators, you can determine the overall truth value of complex expressions. They are particularly useful in disciplines like computer science, philosophy, and mathematics, where logic plays a central role.