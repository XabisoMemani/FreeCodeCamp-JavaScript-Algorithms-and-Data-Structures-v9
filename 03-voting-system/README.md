# Voting System

A poll system that uses `Map` to store options and `Set` to prevent duplicate votes.

## How it works

- `addOption(option)` adds a new poll option mapped to an empty Set
- `vote(option, voterId)` adds a voter ID to that option's Set - Sets ignore duplicates automatically so one person can't vote twice for the same option
- `displayResults()` loops through the Map and prints each option with its vote count

## Key concepts

- `Map` for key/value storage where each key is a poll option
- `Set` for unique voter tracking - `.has()` to check, `.add()` to register, `.size` for the count
- Template literals for all return messages
