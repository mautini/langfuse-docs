export const openApiSpecServer = `
openapi: 3.0.1
info:
  title: langfuse
  version: ''
paths:
  /api/public/events:
    post:
      description: Add an event to the database
      operationId: event_create
      tags:
        - Event
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
      security: &ref_0
        - BasicAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateEventRequest'
  /api/public/scores:
    post:
      description: Add a score to the database
      operationId: score_create
      tags:
        - Score
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Score'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateScoreRequest'
  /api/public/llm-span:
    post:
      description: a
      operationId: span_createLLMCall
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateLLMSpanRequest'
    patch:
      description: Update a span to the database
      operationId: span_updateLLMCall
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateLLMSpanRequest'
  /api/public/spans:
    post:
      description: Add a span to the database
      operationId: span_create
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateSpanRequest'
    patch:
      description: Update a span to the database
      operationId: span_update
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateSpanRequest'
  /api/public/traces:
    post:
      description: Add a trace to the database
      operationId: trace_create
      tags:
        - Trace
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Trace'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateTraceRequest'
    patch:
      description: Update the status of a trace
      operationId: trace_update
      tags:
        - Trace
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Trace'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateTraceRequest'
components:
  schemas:
    CreateEventRequest:
      title: CreateEventRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        attributes: {}
        parentObservationId:
          type: string
      required:
        - traceId
        - name
        - startTime
        - attributes
    Event:
      title: Event
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        type:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        attributes: {}
        parentObservationId:
          type: string
      required:
        - id
        - traceId
        - type
        - name
        - startTime
        - attributes
    CreateScoreRequest:
      title: CreateScoreRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
      required:
        - traceId
        - name
        - value
    Score:
      title: Score
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
        timestamp:
          type: string
          format: date-time
      required:
        - id
        - name
        - value
        - timestamp
    CreateSpanRequest:
      title: CreateSpanRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        attributes: {}
        parentObservationId:
          type: string
      required:
        - traceId
        - name
        - startTime
        - attributes
    UpdateSpanRequest:
      title: UpdateSpanRequest
      type: object
      properties:
        spanId:
          type: string
        endTime:
          type: string
          format: date-time
      required:
        - spanId
        - endTime
    UpdateLLMSpanRequest:
      title: UpdateLLMSpanRequest
      type: object
      properties:
        spanId:
          type: string
        endTime:
          type: string
          format: date-time
        attributes:
          $ref: '#/components/schemas/LLMAttributes'
      required:
        - spanId
        - endTime
        - attributes
    Span:
      title: Span
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        type:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        endTime:
          type: string
          format: date-time
        attributes: {}
        parentObservationId:
          type: string
      required:
        - id
        - traceId
        - type
        - name
        - startTime
        - attributes
    CreateLLMSpanRequest:
      title: CreateLLMSpanRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        parentObservationId:
          type: string
        attributes:
          $ref: '#/components/schemas/LLMAttributes'
      required:
        - traceId
        - name
        - startTime
        - attributes
    LLMAttributes:
      title: LLMAttributes
      type: object
      properties:
        model: {}
        prompt:
          type: string
        completion:
          type: string
        tokens:
          $ref: '#/components/schemas/LLMTokens'
      required:
        - model
    LLMTokens:
      title: LLMTokens
      type: object
      properties:
        prompt_amount:
          type: integer
        completion_amount:
          type: integer
    CreateTraceRequest:
      title: CreateTraceRequest
      type: object
      properties:
        name:
          type: string
        attributes: {}
        status:
          $ref: '#/components/schemas/TraceStatus'
        statusMessage:
          type: string
      required:
        - name
        - attributes
        - status
    UpdateTraceRequest:
      title: UpdateTraceRequest
      type: object
      properties:
        id:
          type: string
        status:
          $ref: '#/components/schemas/TraceStatus'
        statusMessage:
          type: string
      required:
        - id
        - status
    Trace:
      title: Trace
      type: object
      properties:
        id:
          type: string
        timestamp:
          type: string
          format: date-time
        name:
          type: string
        attributes: {}
        status:
          type: string
        statusMessage:
          type: string
      required:
        - id
        - timestamp
        - name
        - attributes
        - status
    TraceStatus:
      title: TraceStatus
      type: string
      enum:
        - EXECUTING
        - SUCCESS
        - ERROR
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`;