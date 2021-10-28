import styled from 'styled-components'

const Container = styled.div`
    /* flex: 1; */
    /* margin: 25px;
    min-width: 280px;
    height: 350px;
    height: 20vh; */
    margin: 23px;
    /* height: 0vh; */
    flex: 1;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    width: 100%;;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1``

const Button = styled.button``  

const CategoryItem = ({item}) => {
    return (
       <Container >
           <Image src={item.img} />
           <Info>
               <Title>{item.title}</Title>
               <Button>Shop Now</Button>
           </Info>
       </Container>
    )
}

export default CategoryItem
