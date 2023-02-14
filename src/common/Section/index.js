import { StyledHeader, StyledSection, H2 } from './styled';

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <H2>{title}</H2>
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);
export default Section;