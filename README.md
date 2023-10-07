# Challenge: Update Private Variables Using Assembly in Solidity

## Problem Description

You are provided with two Solidity contracts: `UintStorage` and `StrangeCalculator`. Your task is to modify the `StrangeCalculator` contract to update private variables in the `UintStorage` contract using Solidity's assembly language.

### Contract Descriptions

#### `UintStorage`

- `UintStorage` is a contract that stores private variables and a mapping.
- It has a private variable `one` initialized to 1.
- It contains a mapping `pointMap` that maps `uint256` keys to `Point` structs.
- `setNewValues(uint256 first, Point calldata point)` is an empty function in which you need to update the private variables in `UintStorage`.

#### `StrangeCalculator`

- `StrangeCalculator` inherits from `UintStorage` and overrides the `setNewValues` function.
- In the overridden function, you must update the private variables in `UintStorage` using Solidity assembly.
