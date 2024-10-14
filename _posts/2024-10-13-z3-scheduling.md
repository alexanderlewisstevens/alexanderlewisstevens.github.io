---
layout: post
title: "Understanding Z3 for scheduling"
author: "Alex"
date: 2024-10-11
tags:
  - z3
  - python
  - constraint-solving
  - scheduling
  - 2300
  - discrete
---


## Meeting Scheduling Problem Using Z3 Solver

This code defines a **meeting scheduling problem** using the Z3 solver to determine a possible meeting time for a group of people based on their availability.

---

### Breakdown of the Code

#### 1. **Setting up Z3 Solver**
A Z3 solver is created with `s = Solver()`. This solver will be responsible for solving the logical constraints related to the scheduling problem.

#### 2. **Defining Possible Meeting Times**
Two lists are created to represent the **days of the week** and the **times of the day**:

```python
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
times = [9, 10, 11]
```

These represent the possible meeting days (Monday through Friday) and times (9 AM, 10 AM, and 11 AM).

#### 3. **Creating Boolean Variables for Each Time Slot**
A dictionary `schedule` is created, where each key is a tuple representing a specific day and time, and each value is a **Boolean variable** representing whether a meeting is scheduled at that time:

```python
schedule = {(day, time): Bool(f'schedule_{day}_{time}') for day in days for time in times}
```

Example: `schedule[('Monday', 9)]` is a Boolean variable representing whether the meeting is scheduled for **Monday at 9 AM**.

#### 4. **Defining Availability for Each Person**
The availability of three individuals (**Alice**, **Bob**, and **Charlie**) is defined. Each person has certain time slots when they are available:

```python
availability = {
    'Alice': [('Monday', 9), ('Wednesday', 10), ('Friday', 11)],
    'Bob': [('Monday', 9), ('Tuesday', 10), ('Friday', 11)],
    'Charlie': [('Wednesday', 10), ('Friday', 11)]
}
```

#### 5. **Adding Constraints Based on Availability**
For each day and time slot in the schedule, constraints are added to the solver based on the availability of each person:

```python
for day_time in schedule:
    for person,slots in availability.items():
        if day_time not in slots:
            s.add(schedule[day_time]==False)
```

This ensures that for any day and time that a person is not available, the corresponding Boolean variable (`schedule[day, time]`) is set to **false** (i.e., no meeting at that time).

#### 6. **Constraint: At Least One Meeting Must Occur**
A constraint is added to ensure that at least **one meeting** takes place at one of the available times:

```python
s.add(Or([schedule[day_time] for day_time in schedule]))
```

This `Or` statement ensures that **at least one** of the possible meeting times is **true** (i.e., one time slot is selected for the meeting).

#### 7. **Checking for a Solution**
The solver checks if the constraints are **satisfiable**:

```python
if s.check() == sat:
    model = s.model()
    print(model)
else:
    print("No common availability found.")
```

- If a solution is found (**sat**), the model (the schedule that satisfies all constraints) is printed.
- If no solution is found (**unsat**), the message **“No common availability found”** is printed.

---

### Example Output

If a meeting can be scheduled, Z3 will return the Boolean values for each time slot. For example:

```
[schedule_Monday_9 = True, schedule_Wednesday_10 = False, ...]
```

This indicates that the meeting is scheduled on **Monday at 9 AM** (where `schedule_Monday_9 = True`), and no meeting is scheduled for **Wednesday at 10 AM**.

---

### Conclusion

This code efficiently solves a **scheduling problem** using the Z3 theorem prover by ensuring that all constraints based on availability are met. It ensures that at least one valid meeting time is found where all individuals can attend, given their available time slots.

