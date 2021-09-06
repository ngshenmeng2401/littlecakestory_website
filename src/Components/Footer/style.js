import styled from 'styled-components';

export const FooterStyle = styled.footer`

    .footer-middle{
        background: #212529;
        margin-top: 5rem;
        padding-top: 1rem;
        color: #fff;

    }

    .footer-bottom{
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    ul li a{
        color: rgba(109, 109, 109);
    }

    ul li a:hover {
        color: rgba(172, 172, 172);
    }

    .title1{
        font-weight: 600;

        &.fontsize1{
            font-size: 16px;
        }

        &.fontsize2{
            font-size: 18px;
        }
    }

    .content1{
        text-align: justify;
        font-size: 15px;
        font-weight: 400;
        color: rgba(172, 172, 172);
        
        &.marginbottom{
            margin-bottom: 2rem;
        }
    }
`;