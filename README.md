### Write tests. Not too many. Mostly integration.

https://www.youtube.com/watch?list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf&v=Fha2bVoC8SE


#### Why do we write tests?

  - Enhanced Workflows and Confidence in making the app the way it should be!
  
#### How much code coverage do we need?

  - "Depends on the project/team"
  - Startups tend to be a bit on the less side and larger companies tend to gear towards higher level.
  
  **Implementation Details**
  
   - If your test does something that the consumer of your doesn't then it's testing implementation details.
   - If a refactor breaks your tests, then it's testing implementation details.

#### UNIT TESTS: 
"Unit Testing means, well, testing individual units of behavior. An individual unit of behavior is the smallest possible unit of behavior that can be individually tested in isolation. (I know that those two definitions are circular, but they seem to work out quite well in practice.)

You can write unit tests before you write your code, after you write your code or while you write your code."

Source: https://softwareengineering.stackexchange.com/questions/59928/difference-between-unit-testing-and-test-driven-development

#### INTEGRATION TESTS: 
"Test communication paths between different parts of the module done by the test department or by developers to show that all modules work correctly together."

Source: https://softwareengineering.stackexchange.com/questions/48237/what-is-an-integration-test-exactly

#### END-TO-END TESTS: 
"As stated above, the actual workflow. Someone puts a piece of goods to the shopping basket and fills in the user data, pays for it. I check if I actually received payment, make call to warehouse, make sure they received the data. And as little cherry on the pie: By receving the parcel, I make sure, that those data were good enough, were printed correctly, especially, when my real name is Pavel Janíček (see the funny diacritics? they sometimes get printed out incorrectly)."

Source: https://stackoverflow.com/questions/19378183/difference-between-system-testing-and-end-to-end-testing
  
USEFUL LINK:
 https://github.com/sapegin/jest-cheat-sheet (JEST CHEATSHEET)
