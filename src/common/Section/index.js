import { StyledHeader, StyledSection, H3 } from './styled';

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <H3>{title}</H3>
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);
export default Section;