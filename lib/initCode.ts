export const htmlCode: string = `
<div class="container">
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>Jane Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>John Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>John Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>John Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>Jane Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
  <div>
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <h3>John Doe</h3>
    <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. </p>
  </div>
</div>  

`;
export const cssCode: string = `
/* number of elements */
.container {
  --d: 15s;
  /* duration */
  display: grid;
  grid-template-columns: repeat(3, 300px);
  /* number of visible elements + width */
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, #0000, #000 5% 95%, #0000);
}

.container > div {
  grid-area: 1/1;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-content: center;
  gap: 10px;
  background: #fff padding-box;
  border-inline: 10px solid #0000;
  animation: r var(--d) linear infinite;
}

.container > div img {
  width: 100%;
  grid-row: span 2;
}

.container > div * {
  margin: 0;
}

.container > div h3 {
  margin-top: auto;
}

.container > div:nth-child(2) {
  animation-delay: calc(-0.1666666667* var(--d));
}

.container > div:nth-child(3) {
  animation-delay: calc(-0.3333333333* var(--d));
}

.container > div:nth-child(4) {
  animation-delay: calc(-0.5* var(--d));
}

.container > div:nth-child(5) {
  animation-delay: calc(-0.6666666667* var(--d));
}

.container > div:nth-child(6) {
  animation-delay: calc(-0.8333333333* var(--d));
}

@keyframes r {
  16.6666666667% {
    transform: translate(-100%);
  }
  16.6766666667% {
    transform: translate(500%);
  }
}
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  font-family: system-ui;
  background: #0E1525;
}
`;
export const jsCode: string = `this is javascript code`;
