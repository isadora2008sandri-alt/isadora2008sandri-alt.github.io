/* ==========================================================================
   PORTFÓLIO DE GRADUAÇÃO — ISADORA SANDRI (ADMINISTRAÇÃO · ATITUS)
   assets/js/main.js — Melhorias progressivas em JavaScript Vanilla (ES2020+)
   ========================================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  inicializarMenuMobile();
  inicializarCopiaEmail();
  inicializarAnoAtual();
});

/**
 * Gerencia a abertura e o fechamento do menu de navegação em dispositivos móveis.
 * Inclui atributos ARIA para acessibilidade e fechamento por tecla ESC.
 */
function inicializarMenuMobile() {
  const navegacao = document.querySelector(".navegacao");
  const botaoToggle = document.querySelector(".navegacao__toggle");
  const linksMenu = document.querySelectorAll(".navegacao__link");

  if (!navegacao || !botaoToggle) return;

  function abrirMenu() {
    navegacao.classList.add("is-aberto");
    botaoToggle.setAttribute("aria-expanded", "true");
    botaoToggle.setAttribute("aria-label", "Fechar menu de navegação");
  }

  function fecharMenu() {
    navegacao.classList.remove("is-aberto");
    botaoToggle.setAttribute("aria-expanded", "false");
    botaoToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  botaoToggle.addEventListener("click", () => {
    const estaAberto = navegacao.classList.contains("is-aberto");
    if (estaAberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Fecha o menu ao clicar em qualquer âncora
  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      if (navegacao.classList.contains("is-aberto")) {
        fecharMenu();
      }
    });
  });

  // Fecha com tecla ESC
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && navegacao.classList.contains("is-aberto")) {
      fecharMenu();
      botaoToggle.focus();
    }
  });
}

/**
 * Permite copiar o endereço de e-mail para a área de transferência com um clique,
 * exibindo confirmação visual acessível durante 2 segundos.
 */
function inicializarCopiaEmail() {
  const botaoCopiar = document.querySelector("#btn-copiar-email");
  const elementoAviso = document.querySelector("#aviso-copia-email");
  const emailTexto = document.querySelector("#texto-email-contato");

  if (!botaoCopiar || !elementoAviso) return;

  let timeoutAviso = null;

  botaoCopiar.addEventListener("click", async () => {
    const emailParaCopiar = emailTexto ? emailTexto.textContent.trim() : "";

    if (!emailParaCopiar || emailParaCopiar.includes("[PREENCHER]")) {
      elementoAviso.textContent = "E-mail ainda não cadastrado para cópia.";
      limparAvisoAposTempo();
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailParaCopiar);
      } else {
        // Fallback para navegadores legados
        const inputTemporario = document.createElement("input");
        inputTemporario.value = emailParaCopiar;
        document.body.appendChild(inputTemporario);
        inputTemporario.select();
        document.execCommand("copy");
        document.body.removeChild(inputTemporario);
      }

      elementoAviso.textContent = "E-mail copiado com sucesso!";
      elementoAviso.setAttribute("role", "status");
      limparAvisoAposTempo();
    } catch (erro) {
      elementoAviso.textContent = "Não foi possível copiar. Selecione manualmente.";
      limparAvisoAposTempo();
    }
  });

  function limparAvisoAposTempo() {
    clearTimeout(timeoutAviso);
    timeoutAviso = setTimeout(() => {
      elementoAviso.textContent = "";
    }, 2000);
  }
}

/**
 * Atualiza dinamicamente o ano corrente exibido no rodapé do site.
 */
function inicializarAnoAtual() {
  const elementoAno = document.querySelector("#ano-corrente");
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear().toString();
  }
}
