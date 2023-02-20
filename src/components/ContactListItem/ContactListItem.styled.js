import styled from "@emotion/styled";

export const ContactListItem = styled.li`
    display: flex;
    gap: 30px;
    border: 3px dotted #7ab076;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;

    .number{
        display: inline-block;
        margin-left: 10px;
        font-size: 22px;
    }

    .delete-button{
        font-size: 20px;
        padding: 4px;
        width: 100px;
        border-radius: 5px;

        &:hover,
        &:focus{
            background-color: #b33d3d;
        }
    }
}
`