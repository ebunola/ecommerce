import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: purple;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deals! Free shipping on Orders about #50,000
        </Container>
    )
}

export default Announcement
