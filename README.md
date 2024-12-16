# React Router DOM Nested Routes Bug

This repository demonstrates a bug in React Router DOM v6 related to unexpected behavior when nesting routes with parameters and wildcard paths.  Routes with parameters are not correctly matching when nested inside other routes, especially when using wildcard paths.  The bug causes unexpected rendering of components or routing errors. 

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to different routes and observe the unexpected behavior.

## Solution

The solution involves restructuring the routes to avoid the conflict.  This might involve using different path patterns or refactoring route nesting. The solution file provides a corrected implementation that addresses the issue.