import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ModalContent } from "./styles";
import { EntityModalProps } from "../../../types";

const EntityModal: React.FC<EntityModalProps> = ({
  entity,
  visible,
  onHide,
}) => {
  if (!entity) return null;

  const footer = (
    <div>
      <Button
        label="Fechar"
        onClick={onHide}
        severity="secondary"
        style={{
          backgroundColor: "#6c757d",
          borderColor: "#6c757d",
          marginRight: "1rem",
          marginBottom: "5px",
        }}
      />
    </div>
  );

  const renderPessoaDetails = () => (
    <div className="info-section">
      <h3 className="info-title">
        <i className="pi pi-user" />
        Informações Pessoais
      </h3>
      <div className="info-grid">
        <div className="info-item">
          <label className="info-label">Nome</label>
          <span className="info-value">{entity.nome}</span>
        </div>
        <div className="info-item">
          <label className="info-label">CPF</label>
          <span className="info-value">{entity.cpf}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Sexo</label>
          <span className="info-value">{entity.sexo}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Data de Nascimento</label>
          <span className="info-value">
            {entity.data_nascimento
              ? new Date(entity.data_nascimento).toLocaleDateString("pt-BR")
              : "N/A"}
          </span>
        </div>
        <div className="info-item">
          <label className="info-label">Nome da Mãe</label>
          <span className="info-value">{entity.nome_mae || "N/A"}</span>
        </div>
      </div>
    </div>
  );

  const renderEmpresaDetails = () => (
    <div className="info-section">
      <h3 className="info-title">
        <i className="pi pi-building" />
        Informações da Empresa
      </h3>
      <div className="info-grid">
        <div className="info-item">
          <label className="info-label">Razão Social</label>
          <span className="info-value">{entity.nome}</span>
        </div>
        <div className="info-item">
          <label className="info-label">CNPJ</label>
          <span className="info-value">{entity.cnpj}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Capital Social</label>
          <span className="info-value">{entity.capital_social || "N/A"}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Data de Início das Atividades</label>
          <span className="info-value">
            {entity.data_inicio_atividade
              ? new Date(entity.data_inicio_atividade).toLocaleDateString(
                  "pt-BR"
                )
              : "N/A"}
          </span>
        </div>
        <div className="info-item">
          <label className="info-label">Situação Cadastral</label>
          <span className="info-value">
            {entity.situacao_cadastral || "N/A"}
          </span>
        </div>
        <div className="info-item">
          <label className="info-label">CNAE Principal</label>
          <span className="info-value">{entity.cnae_principal || "N/A"}</span>
        </div>
        {entity.quadro_societario && entity.quadro_societario.length > 0 && (
          <div className="info-item full-width">
            <label className="info-label">Quadro Societário</label>
            <div className="partners-list">
              {entity.quadro_societario.map((socio, index) => (
                <span key={index} className="partner-tag">
                  {socio}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="info-section">
      <h3 className="info-title">
        <i className="pi pi-phone" />
        Informações de Contato
      </h3>
      <div className="info-grid">
        {entity.telefones.length > 0 && (
          <div className="info-item">
            <label className="info-label">Telefones</label>
            <div className="contact-list">
              {entity.telefones.map((telefone, index) => (
                <span key={index} className="contact-item">
                  <i className="pi pi-phone contact-icon" />
                  {telefone}
                </span>
              ))}
            </div>
          </div>
        )}
        {entity.emails.length > 0 && (
          <div className="info-item">
            <label className="info-label">E-mails</label>
            <div className="contact-list">
              {entity.emails.map((email, index) => (
                <span key={index} className="contact-item">
                  <i className="pi pi-envelope contact-icon" />
                  {email}
                </span>
              ))}
            </div>
          </div>
        )}
        {entity.enderecos.length > 0 && (
          <div className="info-item">
            <label className="info-label">Endereços</label>
            <div className="address-list">
              {entity.enderecos.map((endereco, index) => (
                <div key={index} className="address-item">
                  <i className="pi pi-map-marker contact-icon" />
                  {endereco}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Dialog
      header={
        <div className="entity-header">
          <span className={`entity-type-badge ${entity.tipo}`}>
            {entity.tipo === "pessoa" ? "Pessoa Física" : "Empresa"}
          </span>
          <span className="entity-name">{entity.nome}</span>
        </div>
      }
      visible={visible}
      onHide={onHide}
      style={{ width: "90vw", maxWidth: "1000px" }}
      footer={footer}
      className="entity-modal"
    >
      <ModalContent>
        {entity.tipo === "pessoa"
          ? renderPessoaDetails()
          : renderEmpresaDetails()}
        {renderContactInfo()}
      </ModalContent>
    </Dialog>
  );
};

export default EntityModal;
