# Entendendo como Git Funciona

### SHA1 - Secure Hash Algorithm
 É um conjunto de caracteres criados pela NSA(Agência nacional dos EUA). Para que tenha um entendimento de forma mais simples possível, cada arquivo dentro de uma pasta criada, cria-se esse conjunto de letras e números que seria esse "SHA1". Esse mesmo conjunto encripta o arquivo criado, seja um arquivo de códigos importantes ou até mesmo uma receita de bolo.
 Cada modificação no arquivo seja uma vírgula ou apagou um paragrafo para encurtar o texto, automaticamente o Github gera outro "sha1" que é uma forma inteligente e segura de manter seus arquivos pessoais salvos e livre de qualquer pessoa mal intensionada.

# Objetos Internos do GIT

### **BLOBS**
 Um **blob**(objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório. O hash SHA-1 do arquivo é calculado e armazenado no objeto do blob.

### **TREE**
 As **tree** é o mesmo equivalente a diretórios que por sua vez trás um caminho para as blobs ou também outras trees. Uma **tree**, é uma árvore que aponta para arquivos e pastas dentro de um diretório que também é identificadas pelos seus SHA-1 hash.

 ### **COMMIT**
 O comando **commit** armazena os metadados das pastas e dos arquivos. Ele meio que tira uma foto das informações e salva na nuvem pronto para enviar ao servidor remoto. Um commit é importante pois é ele quem diz a palavra final para seus arquivos ficarem salvos.