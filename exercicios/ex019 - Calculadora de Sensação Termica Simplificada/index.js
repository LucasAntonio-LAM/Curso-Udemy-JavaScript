/*
### 3. Conversor de Temperatura “Sensação Térmica”

*Descrição*
Receba temperatura (°C) e umidade relativa (%) e devolva a sensação térmica calculada pela fórmula simplificada do INMET:
ST = T + 0,33*UR – 0,70 (onde UR é umidade em fração, ex.: 60 % → 0,6).

*Entrada*
35 60

*Saída*
34.49 // Usando a formula simplificada do INMET

---
 */

function calculateThermalSensation(degreesCelsius, relativeHumidity) {
    const humidityFraction = relativeHumidity/100; 
    const thermicSensation = degreesCelsius + (0.33 * humidityFraction) - 0.70;
    console.log(`Graus Celcius: ${degreesCelsius}`);
    console.log(`Umidade Relativa: ${relativeHumidity}`);
    console.log(`Sensação Térmica: ${thermicSensation}`);
};

calculateThermalSensation(35, 60);




