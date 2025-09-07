# Guía de Contribución

## Cómo Contribuir

### Reportar Bugs

1. Verifica que el bug no haya sido reportado anteriormente
2. Crea un issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si es aplicable

### Sugerir Mejoras

1. Abre un issue con la etiqueta "enhancement"
2. Describe la funcionalidad propuesta
3. Explica por qué sería útil
4. Proporciona ejemplos de uso

### Desarrollo Local

1. Fork y clona el repositorio
2. Instala dependencias: `npm install`
3. Crea una rama: `git checkout -b mi-feature`
4. Desarrolla y prueba tus cambios
5. Commit siguiendo las convenciones
6. Push y crea un Pull Request

### Convenciones de Código

- Usa TypeScript para todo el código
- Sigue las reglas de ESLint configuradas
- Usa Prettier para formateo
- Escribe tests para nuevas funcionalidades
- Documenta funciones complejas

### Convenciones de Commits

\`\`\`
tipo(scope): descripción

feat(dashboard): agregar filtro por fecha
fix(charts): corregir error en gráfico de barras
docs(readme): actualizar instrucciones de instalación
\`\`\`

Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
