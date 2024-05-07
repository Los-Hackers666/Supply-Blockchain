# Interactuando con un Contrato Inteligente de Cadena de Suministro

## 📦 Preparación

1. 🛠️ Compilar el contrato:

```
npx hardhat compile
```

2. 🚀 Desplegar el contrato en la testnet:

   a. ⚙️ Activar el nodo local:
   
   ```
   npx hardhat node
   ```
   
   b. 📜 Desplegar el contrato:
   
   ```
   npx hardhat ignition deploy ./ignition/modules/SupplyChain.js --network localhost
   ```

## 🔍 Pruebas con el Dispositivo IoT

1. 🆕 Agregar un nuevo producto:

   ```
   python3 IOT.py -a "Producto de prueba" 100 10
   ```

2. 📋 Obtener detalles del producto:

   ```
   python3 IOT.py -d 1
   ```

3. 🛒 Realizar un pedido:

   ```
   python3 IOT.py -o 1 2
   ```

4. 🏭 Obtener el estado del pedido (debe ser "In Warehouse"):

   ```
   python3 IOT.py -os 1
   ```

5. 🚚 Enviar el pedido:

   ```
   python3 IOT.py -u 1 "En tránsito" 1
   ```

6. 🛣️ Obtener el estado del pedido (debe ser "In Transit"):

   ```
   python3 IOT.py -os 1
   ```

7. 🎉 Entregar el pedido:

   ```
   python3 IOT.py -e 1
   ```

8. ✅ Obtener el estado del pedido (debe ser "Delivered"):

   ```
   python3 IOT.py -os 1
   ```
