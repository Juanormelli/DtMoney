import React from 'react';
import {render} from 'react-dom';
import {createServer, Model} from 'miragejs'

import {App} from './App';
import { table } from 'console';


createServer({
  models: {
    transactions:Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: "Freela web",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 6000,
          createdAt: new Date("2021-06-15")
  
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 2000,
          createdAt: new Date("2021-06-15")
  
        },
      ]
    })
  },

  routes() {
    this.namespace="api"

    this.get("/transactions",() => {
      return this.schema.all("transactions")
    })
    this.post("/transactions",(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data) 
      
    })

  }
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

