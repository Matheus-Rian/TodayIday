# Arquitetura da internet das coisas e protocolo de comunicação

## Quando Conectar as coisas?

**Considere esses atributos na escolha:**

- Baixo consumo de energia;
- Rede de dados limitado;
- Resiliência;
- Segurança;
- Customização;
- Baixo Custo.

## Aonde rodar o IoT? 

- Plataforma: Arduino;
- Embarcado: MCUs;
- Minicomputadores: Raspberry Pi.

## Protocolo de comunicação

- O protocolo MQTT(protocolo do IoT mais utilizado)

* MQTT
*Modelo: Publish/Subscribe*

- Base na pilha TCP/IP;
- Protocolo de mensagem assíncrona(M2M);
- Criado pela IBM para conectar sensores de pipelines de petróleo a satélites;
- Padrão OASIS suportado pelas linguagens de programação mais populares.

### Flexibilidade dos tópicos

|mqtt://|broker.io/|a6g319/|gps/| position  |
|---|---|---|---|---|
|Protocolo   |Broker| user identifier  | sensor  | informartion type |

- Exemplo geral

mqtt://broker.io/user/accelerometer
mqtt://broker.io/user/gps/position
mqtt://broker.io/user/gps/velocity

- Exemplo de como ficaria a localização para carros:

> sub - Receber as mensagens
> pub - Envio de informações

pub mqtt://broker.io/a6fb45/gps/position
pub mqtt://broker.io/f7j48k/gps/position


