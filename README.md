# node-project

This is a backend server project using node and express Js, which is connected to postgressql. Wrote 6 end points which prints the personal information i.e., first record. The CRUD operations are creating a data record, updating the record, printing all records, printing specific record, delete a record.

<b>Steps to execute the project:</b>

This project is divided into two stages

<b>Stage 1:</b>
- First Download and install postgres sql from https://www.postgresql.org/download/
- While installing you are prompted for a password save this password for future reference, this will be asked to start server in pgadmin
- Open Postgresql command line psql in pgadmin and execute the script in file db_script.sql
  
  ![image](https://github.com/byreddyrohithreddy/node-project/assets/34168749/3e70e13c-d3e7-4e1c-88eb-c56aab29d03d)

- Later you can see the database and table are created, also a personal record is inserted.

<b>Stage 2:</b>
- In stage two we will download this project by executing script
  ```
  git clone https://github.com/byreddyrohithreddy/node-project
   ```
- Go to root module and open index.ts file in src and enter the password from stage 1 in specified location as shown in figure below

  ![image](https://github.com/byreddyrohithreddy/node-project/assets/34168749/a5edcb3f-4484-4259-a99f-dd4ebd68165e)

- After entering the project setup is finished
- Lets test the application by executing
  ```
  npm test
  ```
- After executing you can see Pass screen like below

  ![image](https://github.com/byreddyrohithreddy/node-project/assets/34168749/5c562ac2-ae09-4fcf-b505-1d3869df097b)

- Later we can the populated data in table too
- For Backend server to spin up we need to execute below command
  ```
  ts-node src/index.ts
  ```
- This will spin the server and we can call the backend using the endpoints

Refereences:

- https://expressjs.com/en/starter/installing.html
- https://www.postgresql.org/download/
- https://www.npmjs.com/package/ts-node
- https://jestjs.io/
