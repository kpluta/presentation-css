Example 1:

Problem:

- transform creates its own boundaries which is consider as a root element for fix position of children

Solutions:

- always put modals in main level of the page

Example 2:

Problem:

- transform creates its own boundaries which is consider as a root background for children

Solutions:

- use mix-blend mode on the same element that has transform property

Example 3:

Problem:

- z-index is ignored because of transformed container new context

Solution:

- use z-indexes positioning within elements on the same DOM level
- use transform as a feature to isolate elements from upper level z-index positioned elements
