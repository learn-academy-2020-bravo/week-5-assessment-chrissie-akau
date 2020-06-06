# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model View Controller framework and it helps separate what the viewer/user sees and how that information is actually being stored internally.

  Researched answer: MVC stands for Model View Controller and it is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements.  This is done to separate internal reprsenatations of information from the ways information is presented and accepted from the user.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: If an application has CRUD, it means it has achieved the goal of being an all-around user friendly app.  CRUD stands for Create, Read, Update and Delete.  If your app is lacking one of these four functions, it's probably not the best.

  Researched answer: CRUD stands for Create, Read, Update, and Delete and is shorthand for the basic functions that an application must convetionally be able to fulfill in order to be considered "complete".


3. What is a migration? Why would you use one?

  Your answer: A migration is used in Rails to make changes or adjustments to a model you have already created.  For example, if you forgot a column or need to delete or rename one, you would do it through a migration.  Migrations are also excellent records of your apps history, so you can always see what has been changed or updated.

  Researched answer: Migrations are a convenient way to alter your database schema over time in a consistent way.  It uses Ruby DSL so you don't have to write SQL by hand, allowing your schema and changes to be database independent. You can think of each migration as being a new 'version' of the database.  A schema starts off with nothin in it and each migration modifies it to add or remove tables, columns, or entries.  Active Record knows how to update your schema along this timeline, bringing it form whatever point it is in the history to the latest version.  It will automatically update your db/schema.rb file to match the up-to-date structure of your database.


4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: I am going to base this model off of someone like myself, who is one Person who has many Computers, and I am the only user of each computer.  The relationship would be Person has_many :computers, and Computer belongs_to :person.  The Computer model would hold the foreign key, since it is the belongs_to side.  In this case the foreign key would be person_id: integer.

  Researched answer: To create an association between Person and Computer, we need to assign a foreign key to Computer, since this has been established as the belongs_to side.



5. What is object-relational mapping?

  Your answer: Object-relational mapping in relation to Rails, is how you can use Ruby to communicate, but it'll give you JSON back or translates it to SQL.

  Researched answer: A programming technique for converting data between incompatible type systems using object-oriented programming languages.  This creates, in effect, a "virtual object database" that can be used from within the programming language.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - REST (Representation State Transfer) is an architectural style for defining our routes.  It is a way of mapping HTTP routes and the CRUD functionalities.  7 RESTful routes include index, new, create, show, edit, update, destroy.  Index, New, Show, and Edit uses http verb GET, Create uses http verb POST, and Update uses http verb: PUT.
- JSON- JavaScript Object Notation is a lightweight data-interchange format.  It is easy for humans to read and write and easy for machines to parse and generate.  It is built on two structures: an object and an array.
- API- a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, applicaiton, or othe rservice.
- Endpoints- a route defined by your rails applications.  Hitting that endpoint will serve up a resource from your application, or perform some form of action.
- Strong params - provides an interface for protecting attributes from end-user assignment.  THis makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
