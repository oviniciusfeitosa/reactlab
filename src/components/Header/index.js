import React from 'react';

const Header = () => {
    return (
        <h1>Hello</h1>
    );
};

// O react reconhece a definição de funções como classes que herdam de Components
// O Código acima equivale ao código debaixo.
// class Header extends Component {
//     render() {
//         return <h1>Hellow</h1>;
//     }
// }