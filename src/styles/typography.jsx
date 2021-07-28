import styled from "styled-components";

export const RemoveBulletsFromList = styled.div`
	& ul {
		list-style: none;
		padding-left: 30px;
	}
	& ul li {
		padding: 0px;
	}
`;

export const Accent = styled.span`
	color: var(--color-primary-accent);
`;