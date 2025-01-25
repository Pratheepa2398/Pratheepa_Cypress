e// have to install the cypress file upload plugin using command "npm install --save-dev cypress-file-upload" 
// Add an import commands.js "import 'cypress-file-upload';""

//Uploading a file in the web (Before uploading any file, add it to the fixtures folder)


/// <reference types="cypress-downloadfile"/>
describe('File Upload and Download Test', () => {
    it('File Upload', () => {
    
      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
      cy.get("#filesToUpload").attachFile(['Pic2.jpg']);
      
  
  
      // Select file input and upload the file
      //cy.get('#file').attachFile(filePath);
      //cy.get('#file-submit').click();
  
      // Assert successful upload
      cy.contains('Files You Selected:').should('be.visible'); // Replace with your app's success message
      cy.wait(4000);
    })
  

    it('Mutiple file uploads', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Pic2.jpg', 'Pic3.jpg','Basics of salesforce.docx']);
    })
     

    
});