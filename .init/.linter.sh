#!/bin/bash
cd /home/kavia/workspace/code-generation/simple-todo-list-application-47def98b/todo_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

