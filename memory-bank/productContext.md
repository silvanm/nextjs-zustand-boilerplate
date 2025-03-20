# Product Context: Next.js + Zustand Boilerplate

## Purpose
This project exists to demonstrate how to effectively use Zustand for state management in a Next.js application. It serves as both a learning resource and a starting point for developers who want to implement Zustand in their own Next.js projects.

## Problems Solved
- **State Management Complexity**: Simplifies global state management compared to more complex solutions like Redux
- **Learning Curve**: Provides a clear, simple example of Zustand implementation
- **Boilerplate Reduction**: Offers a ready-to-use template to reduce setup time for new projects
- **Best Practices**: Demonstrates recommended patterns for state management

## How It Works
The application demonstrates a simple bear population counter with various controls:
1. Users can view the current bear count
2. Users can increase the population by one
3. Users can decrease the population by one
4. Users can remove all bears (reset to zero)
5. Users can set a specific bear count

Each component subscribes only to the parts of the state it needs, demonstrating efficient state usage.

## User Experience Goals
- **Simplicity**: Clean, intuitive interface that's easy to understand
- **Responsiveness**: Works well on all device sizes
- **Educational**: Code is structured to be easily understood and learned from
- **Extensibility**: Designed to be a foundation that can be built upon

## Target Audience
- Frontend developers learning Zustand
- Developers starting new Next.js projects
- Teams looking for state management patterns
- Developers comparing state management solutions
