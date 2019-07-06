import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, dialog, figure, footer, header,
hgroup, menu, nav, section,
time, mark, audio, video {
	margin:0;
	padding:0;
	border:0;
	outline:0;
	font-size:100%;
	vertical-align:baseline;
	background:transparent;
}
body {
	line-height:1;
}

article, aside, dialog, figure, footer, header,
hgroup, nav, section {
	display:block;
}

nav ul {
	list-style:none;
}

blockquote, q {
	quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content:'';
	content:none;
}

a {
	margin:0;
	padding:0;
	border:0;
	font-size:100%;
	vertical-align:baseline;
	background:transparent;
}

ins {
	background-color:#ff9;
	color:#000;
	text-decoration:none;
}

mark {
	background-color:#ff9;
	color:#000;
	font-style:italic;
	font-weight:bold;
}

del {
	text-decoration: line-through;
}

abbr[title], dfn[title] {
	border-bottom:1px dotted #000;
	cursor:help;
}

table {
	border-collapse:collapse;
	border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
	vertical-align:middle;
}

body {
  background: #6e1316;
  color: #fff;
	font-family: 'TsukuBRdGothic-Regular';
}
`

export const LogoWrap = styled.div`
width: 100vw;
display: flex;
justify-content: center;
position: fixed;
top: 30px;
z-index: 21;
`

export const MenuWrap = styled.div`
position: relative;
z-index: 5;
`
