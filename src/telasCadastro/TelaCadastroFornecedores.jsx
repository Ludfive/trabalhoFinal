import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        cnpj:'',
        nome:'',
        produto:'',
        estado:'',
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        )
    }
    else {
        return (
            <Container>
                <Pagina>
                    {
                    
                            exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario}
                            fornecedorParaEdicao={fornecedorParaEdicao}
                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}
                        />
                            :
                            <TabelaFornecedores exibirFormulario={setExibirFormulario}
                                fornecedorParaEdicao={fornecedorParaEdicao}
                                setFornecedorParaEdicao={setFornecedorParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>
        )
    }
}