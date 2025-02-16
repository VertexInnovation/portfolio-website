declare module "@formfacade/embed-react" {
    import React from "react";
  
    interface FormfacadeEmbedProps {
      formFacadeURL: string;
      onSubmitForm?: () => void;
    }
  
    const FormfacadeEmbed: React.FC<FormfacadeEmbedProps>;
    export default FormfacadeEmbed;
  }
  