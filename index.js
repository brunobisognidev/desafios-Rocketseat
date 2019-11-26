const express = require('express'); 

const server = express();

const projects = [];

function checkProjectExists (req , res , next){
   const { id } = req.params; 
   const projects = projects.find(p => p.id ==id);

   if (!projects){
      return res.status(400) = projects.find(p => p.id == id);
      
      }
      return next();

   }
   function logRequests(req, res, next){

      console.count("Número de requisições");

      return next(); 
   }

   server.use(logRequests);

   server.get('/projects', (req, res) => {
      return res.json(projects);
   });

   server.post('/projects', (req, res) => {
      const { id , title } = req.body;

      const project = {

         id,
         title,
         tasks: []
      };

      project.push(project);

      return res.json(project)
   });


   server.put('/project/:id', checkProjectExists, (req, res) => {
      const { id } = req.params;
      const {title} = req.body;

      const project = project.find(p => p.id == id);

      project.title = title;

      return res.json(project);
   });

   server.delete('/project/:id' , checkProjectExists,(req, res) => {
      const { id } = req.params;

      const projectIndex = projects.findIndex (p => p.id == id);

      projects.splice(projectIndex, 1);

      return res.send()

   });

   server.post('/project/:id/task', checkProjectExists, (req, res) => {
      const { id } = req.paramns;
      const { title} = req.body;

      const project = projects.find(p => p.id == id);

      project.tasks.push(title);

      return res.json(project);
   });

server.listen(4000);
