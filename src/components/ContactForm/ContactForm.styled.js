import styled from "@emotion/styled";

export const ContactFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    width: 500px;
    max-height: 400px;
    padding: 32px;
    gap: 20px;
    border-radius: 10px;
    label{
        display: flex;
        flex-direction: column;


        input{
            margin-top: 8px;
            width: 50%;
            padding: 8px;
            font-size: 16px;
            border-radius: 5px;
        }
    }

    button{
        padding: 8px;
        width: 150px;
        margin: 0 auto;
        font-size: 20px;
        border-radius: 5px;
        
        &:hover,
        &:focus{
            background-color: aliceblue;
        }
    }
`