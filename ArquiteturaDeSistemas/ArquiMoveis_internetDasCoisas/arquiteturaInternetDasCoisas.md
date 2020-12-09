# Arquitetura da internet das coisas e protocolo de comunicação - Aula 2, 3 e 4

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

## Protocolo de comunicação(MQTT)

- O protocolo MQTT(protocolo do IoT mais utilizado)

* MQTT
*Modelo: Publish/Subscribe*
> O protocolo MQTT define dois tipos de entidades na rede: um message broker e inúmeros clientes. O broker é um servidor que recebe todas as mensagens dos clientes e, em seguida, roteia essas mensagens para os clientes de destino relevantes

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


### Níveis de Garantia

* QoS 0

- Nível mínimo de menor esforço;
- Sem garantia de entrega;
- Mensagem não é retransmitida.


* QoS 1 e QoS 2

- Garante que a mensagem foi entregue no mínimo uma vez ao recebedor;
- Mensagem pode ser retransmitida se não houver confirmação de entrega.

## Cloud

- Grande e cada vez maior número de devices conectados;
- TBs ou PBs de informações;
- Potencial de escala global.

## Arquitetura(Localização dos carros)

GPS -> Broker -> Worker -> Data Store
> Prova de conceito
App Android -> Eclipse Mosquito -> Node.js -> MySql
> MVP 
GPS Embarcado -> HiveMQ -> Akka Scala JVM -> Banco de Dados noSQL
> Solução
GPS Embarcado -> AWS IoT Core -> AWS Kinesis Firehose -> AWS S3