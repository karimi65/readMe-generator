// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}

  [Link to page](${data.link})

  ---
  ## Description
  ${data.description}

  ---
  ## Table of Content
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Credits](#Credits)

  * [Test](#Test)

  * [License](#License)

  * [Question](#Question)



  ---
  ## Installation:
  ${data.installation} 
  

  ---
  ## Usage:
  ${data.usage}
   

  ---
  ## Credits:
  ${data.credits}
  

  ---
  ## Test:
  ${data.test}
  

  ---
  ## License:
  ${data.license}
  

  --- 
  ## Question?
  If you have any question or require any further information, feel free to contact me. 

  GitHub: ${data.GitHub}

  Email: ${data.Email}

  `;
}

module.exports = generateMarkdown;
