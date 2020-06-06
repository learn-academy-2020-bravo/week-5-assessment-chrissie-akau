# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
The command to create a new rails application, ensuring that it is with a Postgres database is:

    => rails new app_name -d postgresql -T 
      - The -d postgresql -T is telling rails we want to use postgresql as the database, not their default one database it comes packaged with and the -T is telling it we're using RSPEC not their default one.


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - get is the http verb we are sending to the server through the url
library - is the url
:id - is the symbol that's in the params portion of an instance variable in the method. This would go in the url section after library
book - name of the controller
show - name of the method in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

If you forgot a foreign key, you would need to make a new migration to add the foreign key to the belongs_to side.  You would first have to, in your terminal, do:
    - rails generate migration add_foreign_key_to_belongs_to_modelname
You would then find the new file in the migrate directory and then do the following under the def change method:
    - add_column :modelname_of_belongstoside, :modelname_of_hasmany_side_id, :integer
Then you would rails db:migrate in the terminal and your schema should hopefully be updated!

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
The command would be, in terminal:
    => rails generate model Person shirt:string pants:string shoes:string
I'm assuming that the shirt, pants, and shoes will be descriptions of what the person is wearing, string is the data type I have given these columns.

5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
The naming convention for creating a Rails model is uppercase and singular, and the naming convention for the database table is plural and snake_case.