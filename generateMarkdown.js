// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [Link to page](${data.link})

  ## Description
  ${data.description}


  ## Table of Content
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Credits](#Credits)

  * [Test](#Test)

  * [MIT License](#License)

  * [Question](#Question)



  ## Installation:
  ------------------------------------------------------ 
  ${data.installation} 

  ## Usage:
  ------------------------------------------------------ 
  ${data.usage}

  ## Credits:
  ------------------------------------------------------
   ${data.credits}

  ## Test:
  ------------------------------------------------------
   ${data.test}

  ## License:
  ------------------------------------------------------
   ${data.license}

  ## Question:
  ------------------------------------------------------ 
  ${data.GitHub}

  ${data.Email}

  `;
}

module.exports = generateMarkdown;
