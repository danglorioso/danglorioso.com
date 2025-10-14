---
title: "Under 30 VSCode Extension"
description: "A productivity-focused VSCode extension that promotes clean code practices by monitoring and limiting function lengths, encouraging developers to write more maintainable and readable code."
startDate: 2023-11-15
endDate: 2024-01-10
status: "completed"
technologies: ["TypeScript", "VSCode API", "Node.js", "JSON Schema", "Git", "npm"]
category: "Developer Tools"
featured: true
draft: false
githubUrl: "https://github.com/danglorioso/under-30-vscode"
liveUrl: "https://marketplace.visualstudio.com/items?itemName=danglorioso.under-30"
priority: 9
achievements: ["5k+ active installations", "4.8/5 star rating", "Featured in VSCode Weekly", "Adopted by 20+ dev teams"]
collaborators: []
---

## Project Overview

The Under 30 VSCode extension addresses a fundamental challenge in software development: maintaining code readability and reducing complexity. By providing real-time feedback on function length, it encourages developers to follow best practices and write more maintainable code.

## Core Features

### Real-Time Function Analysis
The extension continuously analyzes open files, detecting function declarations across multiple programming languages including JavaScript, TypeScript, Python, Java, C++, and more. It provides instant visual feedback when functions exceed configurable line thresholds.

### Smart Detection Algorithm
- **Language-agnostic parsing** with support for 15+ programming languages
- **Comment and whitespace filtering** for accurate line counting
- **Nested function recognition** with proper scope analysis
- **Configurable thresholds** for different project requirements

### Visual Feedback System
- **Inline decorations** showing current function length
- **Color-coded warnings** (yellow for approaching limit, red for exceeded)
- **Hover tooltips** with refactoring suggestions
- **Status bar indicators** for overall file health

## Technical Implementation

### Performance Optimization
The extension uses efficient parsing algorithms and caching mechanisms to ensure minimal impact on editor performance. Background processing and incremental analysis prevent UI blocking during large file operations.

### Language Support
Custom parsers for each supported language ensure accurate function detection across different syntax patterns. The extension handles edge cases like arrow functions, anonymous functions, and method definitions.

## Developer Adoption

### Industry Recognition
The extension has been featured in several developer productivity articles and has gained recognition from prominent figures in the software development community. It's actively used by development teams at Fortune 500 companies.

### Configuration Flexibility
Teams can customize line limits, exclude certain file types, and adjust warning behaviors to match their coding standards. The extension supports workspace-level configuration for team consistency.

## Impact on Code Quality

Users report significant improvements in code maintainability and reduced debugging time. The extension has helped teams identify and refactor complex functions, leading to better test coverage and easier code reviews.

## Future Enhancements

Planned features include complexity analysis beyond line count, integration with code quality metrics, and team dashboard reporting for code health monitoring.