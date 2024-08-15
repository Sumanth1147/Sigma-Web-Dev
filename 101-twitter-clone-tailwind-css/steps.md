----------------------------------------------tailwind setup
npm init -y
  npm install -D tailwindcss
npx tailwindcss init
Step 2: Update tailwind.conf.js file to include this line:

content: ["*.html"],
Step 3: create src/input.css to include:

@tailwind base;
@tailwind components;
@tailwind utilities;


Step 4: Include the src/output.css file to your html

Step 5: Run the following command:

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
----------------------------------------------------------------------
---> google fonts

---> package.json --> scripts -> add "dev": "vite"
---> npm run dev // to auto reload css

---------------------------------------------------------------

- increase third section width ---------

---- whenever making changes in tailwind css, keep watching the files with  ----> npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
