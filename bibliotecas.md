npm i bcrypt @prisma/client
npm i @types/bcrypt prisma -D
npx prisma init  
pscale auth login  
pscale branch create dados initial-setup  
pscale branch promote dados main  
pscale connect dados initial-setup --port 3309
npx prisma db push

DATABASE_URL=mysql://root@127.0.0.1:3309/dados
