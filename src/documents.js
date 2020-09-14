module.exports = ({ name, lastName }) => {
  const fullName = `${name} ${lastName}`;
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .title {
                 text-align: center;
                 font-size: 38px;
              }
              
              .name {
                color: red;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
              }
          </style>
       </head>
       <body>
         <div class="wrapper">
            <h2 class="title">
              Сертифікат
            </h2>
            <div class="name">
                ${fullName}
            </div>
          </div>
       </body>
    </html>
  `;
};