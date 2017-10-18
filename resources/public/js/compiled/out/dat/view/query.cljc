(ns dat.view.query)

(def rules
  '[[(attr-ident-value-type-ident ?attr-ident ?value-type-ident)
     [?attr :db/ident ?attr-ident]
     [?attr :db/valueType ?value-type]
     [?value-type :db/ident ?value-type-ident]]
    ;; Recursive subtype definition
    [(isa ?subtype ?type)
     [(= ?subtype ?type)]]
    [(isa ?subtype ?type)
     [?subtype :e.type/isa ?type]]
    [(isa ?subtype ?type)
     [?subtype :e.type/isa ?type2]
     (isa ?type2 ?type)]
    ;; Type instances
    [(type-instance ?type ?e)
     [?e :e/type ?type]]
    [(type-instance ?type ?e)
     [?e :e/type ?subtype]
     (isa ?subtype ?type)]])
    ; Type attributes
    ;[(type-attr ?type ?attr)
    ; [?type :e.type/attributes ?attr]]
    ;[(type-attr ?type ?attr)
    ; [?supertype :e.type/attributes ?attr]
    ; (isa ?type ?supertype)]])


