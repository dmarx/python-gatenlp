Search.setIndex({docnames:["gatenlp","gatenlp.annotation","gatenlp.annotation_set","gatenlp.changelog","gatenlp.document","gatenlp.exceptions","gatenlp.feature_bearer","gatenlp.gate_interaction","gatenlp.gateslave","gatenlp.impl","gatenlp.impl.sortedintvls","gatenlp.lib_spacy","gatenlp.lib_stanfordnlp","gatenlp.lib_stanza","gatenlp.offsetmapper","gatenlp.serialization","gatenlp.serialization.default","gatenlp.serialization.srsly","gatenlp.utils","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["gatenlp.rst","gatenlp.annotation.rst","gatenlp.annotation_set.rst","gatenlp.changelog.rst","gatenlp.document.rst","gatenlp.exceptions.rst","gatenlp.feature_bearer.rst","gatenlp.gate_interaction.rst","gatenlp.gateslave.rst","gatenlp.impl.rst","gatenlp.impl.sortedintvls.rst","gatenlp.lib_spacy.rst","gatenlp.lib_stanfordnlp.rst","gatenlp.lib_stanza.rst","gatenlp.offsetmapper.rst","gatenlp.serialization.rst","gatenlp.serialization.default.rst","gatenlp.serialization.srsly.rst","gatenlp.utils.rst","index.rst"],objects:{"":{gatenlp:[0,0,0,"-"]},"gatenlp.Annotation":{contains_offset:[0,2,1,""],copy:[0,2,1,""],deepcopy:[0,2,1,""],end:[0,2,1,""],features:[0,2,1,""],from_dict:[0,2,1,""],gap:[0,2,1,""],id:[0,2,1,""],is_after:[0,2,1,""],is_before:[0,2,1,""],is_coextensive:[0,2,1,""],is_covering:[0,2,1,""],is_overlapping:[0,2,1,""],is_within:[0,2,1,""],start:[0,2,1,""],to_dict:[0,2,1,""],type:[0,2,1,""]},"gatenlp.AnnotationSet":{add:[0,2,1,""],add_ann:[0,2,1,""],by_offset:[0,2,1,""],by_span:[0,2,1,""],changelog:[0,2,1,""],clear:[0,2,1,""],clone_anns:[0,2,1,""],coextensive:[0,2,1,""],contains:[0,2,1,""],copy:[0,2,1,""],covering:[0,2,1,""],deepcopy:[0,2,1,""],detached:[0,2,1,""],detached_from:[0,2,1,""],document:[0,2,1,""],end:[0,2,1,""],fast_iter:[0,2,1,""],first:[0,2,1,""],from_dict:[0,2,1,""],get:[0,2,1,""],is_detached:[0,2,1,""],is_immutable:[0,2,1,""],iter:[0,2,1,""],last:[0,2,1,""],name:[0,2,1,""],overlapping:[0,2,1,""],remove:[0,2,1,""],reverse_iter:[0,2,1,""],set_immutable:[0,2,1,""],size:[0,2,1,""],span:[0,2,1,""],start:[0,2,1,""],start_eq:[0,2,1,""],start_ge:[0,2,1,""],start_lt:[0,2,1,""],start_min_ge:[0,2,1,""],to_dict:[0,2,1,""],type_names:[0,2,1,""],with_type:[0,2,1,""],within:[0,2,1,""]},"gatenlp.ChangeLog":{add_handler:[0,2,1,""],append:[0,2,1,""],fixup_changes:[0,2,1,""],format_to:[0,2,1,""],from_dict:[0,2,1,""],load:[0,2,1,""],load_mem:[0,2,1,""],pprint:[0,2,1,""],save:[0,2,1,""],save_mem:[0,2,1,""],to_dict:[0,2,1,""]},"gatenlp.Document":{apply_changes:[0,2,1,""],copy:[0,2,1,""],deepcopy:[0,2,1,""],features:[0,2,1,""],from_dict:[0,2,1,""],get_annotation_set_names:[0,2,1,""],get_annotations:[0,2,1,""],load:[0,2,1,""],load_mem:[0,2,1,""],name:[0,2,1,""],remove_annotation_set:[0,2,1,""],save:[0,2,1,""],save_mem:[0,2,1,""],set_changelog:[0,2,1,""],size:[0,2,1,""],text:[0,2,1,""],to_dict:[0,2,1,""],to_offset_type:[0,2,1,""]},"gatenlp.annotation":{Annotation:[1,1,1,""]},"gatenlp.annotation.Annotation":{contains_offset:[1,2,1,""],copy:[1,2,1,""],deepcopy:[1,2,1,""],end:[1,2,1,""],features:[1,2,1,""],from_dict:[1,2,1,""],gap:[1,2,1,""],id:[1,2,1,""],is_after:[1,2,1,""],is_before:[1,2,1,""],is_coextensive:[1,2,1,""],is_covering:[1,2,1,""],is_overlapping:[1,2,1,""],is_within:[1,2,1,""],start:[1,2,1,""],to_dict:[1,2,1,""],type:[1,2,1,""]},"gatenlp.annotation_set":{AnnotationSet:[2,1,1,""]},"gatenlp.annotation_set.AnnotationSet":{add:[2,2,1,""],add_ann:[2,2,1,""],by_offset:[2,2,1,""],by_span:[2,2,1,""],changelog:[2,2,1,""],clear:[2,2,1,""],clone_anns:[2,2,1,""],coextensive:[2,2,1,""],contains:[2,2,1,""],copy:[2,2,1,""],covering:[2,2,1,""],deepcopy:[2,2,1,""],detached:[2,2,1,""],detached_from:[2,2,1,""],document:[2,2,1,""],end:[2,2,1,""],fast_iter:[2,2,1,""],first:[2,2,1,""],from_dict:[2,2,1,""],get:[2,2,1,""],is_detached:[2,2,1,""],is_immutable:[2,2,1,""],iter:[2,2,1,""],last:[2,2,1,""],name:[2,2,1,""],overlapping:[2,2,1,""],remove:[2,2,1,""],reverse_iter:[2,2,1,""],set_immutable:[2,2,1,""],size:[2,2,1,""],span:[2,2,1,""],start:[2,2,1,""],start_eq:[2,2,1,""],start_ge:[2,2,1,""],start_lt:[2,2,1,""],start_min_ge:[2,2,1,""],to_dict:[2,2,1,""],type_names:[2,2,1,""],with_type:[2,2,1,""],within:[2,2,1,""]},"gatenlp.changelog":{ChangeLog:[3,1,1,""]},"gatenlp.changelog.ChangeLog":{add_handler:[3,2,1,""],append:[3,2,1,""],fixup_changes:[3,2,1,""],format_to:[3,2,1,""],from_dict:[3,2,1,""],load:[3,2,1,""],load_mem:[3,2,1,""],pprint:[3,2,1,""],save:[3,2,1,""],save_mem:[3,2,1,""],to_dict:[3,2,1,""]},"gatenlp.document":{Document:[4,1,1,""]},"gatenlp.document.Document":{apply_changes:[4,2,1,""],copy:[4,2,1,""],deepcopy:[4,2,1,""],features:[4,2,1,""],from_dict:[4,2,1,""],get_annotation_set_names:[4,2,1,""],get_annotations:[4,2,1,""],load:[4,2,1,""],load_mem:[4,2,1,""],name:[4,2,1,""],remove_annotation_set:[4,2,1,""],save:[4,2,1,""],save_mem:[4,2,1,""],set_changelog:[4,2,1,""],size:[4,2,1,""],text:[4,2,1,""],to_dict:[4,2,1,""],to_offset_type:[4,2,1,""]},"gatenlp.exceptions":{InvalidOffsetException:[5,4,1,""]},"gatenlp.feature_bearer":{FeatureBearer:[6,1,1,""],FeatureViewer:[6,1,1,""]},"gatenlp.feature_bearer.FeatureBearer":{clear_features:[6,2,1,""],del_feature:[6,2,1,""],feature_names:[6,2,1,""],feature_values:[6,2,1,""],features_copy:[6,2,1,""],get_feature:[6,2,1,""],has_feature:[6,2,1,""],num_features:[6,2,1,""],set_feature:[6,2,1,""],update_features:[6,2,1,""]},"gatenlp.gate_interaction":{DefaultPr:[7,1,1,""],get_arguments:[7,3,1,""],interact:[7,3,1,""]},"gatenlp.gate_interaction.DefaultPr":{finish:[7,2,1,""],reduce:[7,2,1,""],start:[7,2,1,""]},"gatenlp.gateslave":{GateSlave:[8,1,1,""],classpath_sep:[8,3,1,""],gate_classpath:[8,3,1,""]},"gatenlp.gateslave.GateSlave":{close:[8,2,1,""],del_gdoc:[8,2,1,""],gdoc2pdoc:[8,2,1,""],load_gdoc:[8,2,1,""],load_pdoc:[8,2,1,""],pdoc2gdoc:[8,2,1,""],save_gdoc:[8,2,1,""],show_gui:[8,2,1,""]},"gatenlp.impl":{sortedintvls:[10,0,0,"-"]},"gatenlp.impl.sortedintvls":{SortedIntvls:[10,1,1,""]},"gatenlp.impl.sortedintvls.SortedIntvls":{add:[10,2,1,""],at:[10,2,1,""],covering:[10,2,1,""],discard:[10,2,1,""],ending_after:[10,2,1,""],ending_at:[10,2,1,""],ending_to:[10,2,1,""],firsts:[10,2,1,""],irange:[10,2,1,""],lasts:[10,2,1,""],max_end:[10,2,1,""],min_start:[10,2,1,""],overlapping:[10,2,1,""],remove:[10,2,1,""],starting_at:[10,2,1,""],starting_before:[10,2,1,""],starting_from:[10,2,1,""],update:[10,2,1,""],within:[10,2,1,""]},"gatenlp.lib_spacy":{apply_spacy:[11,3,1,""],spacy2gatenlp:[11,3,1,""]},"gatenlp.lib_stanfordnlp":{apply_stanfordnlp:[12,3,1,""],stanfordnlp2gatenlp:[12,3,1,""]},"gatenlp.lib_stanza":{apply_stanza:[13,3,1,""],stanza2gatenlp:[13,3,1,""],tok2tok:[13,3,1,""]},"gatenlp.offsetmapper":{OffsetMapper:[14,1,1,""]},"gatenlp.offsetmapper.OffsetMapper":{convert_to_java:[14,2,1,""],convert_to_python:[14,2,1,""]},"gatenlp.serialization":{"default":[16,0,0,"-"],srsly:[17,0,0,"-"]},"gatenlp.serialization.default":{GateXmlLoader:[16,1,1,""],HtmlAnnViewerSerializer:[16,1,1,""],HtmlLoader:[16,1,1,""],JsonSerializer:[16,1,1,""],MsgPackSerializer:[16,1,1,""],PlainTextSerializer:[16,1,1,""],YamlSerializer:[16,1,1,""],determine_loader:[16,3,1,""],get_bytes_from_url:[16,3,1,""],get_changelog_loader:[16,3,1,""],get_changelog_saver:[16,3,1,""],get_document_loader:[16,3,1,""],get_document_saver:[16,3,1,""],get_handler:[16,3,1,""],get_str_from_url:[16,3,1,""],is_url:[16,3,1,""]},"gatenlp.serialization.default.GateXmlLoader":{load:[16,2,1,""]},"gatenlp.serialization.default.HtmlAnnViewerSerializer":{save:[16,2,1,""]},"gatenlp.serialization.default.HtmlLoader":{load:[16,2,1,""],load_rendered:[16,2,1,""]},"gatenlp.serialization.default.JsonSerializer":{load:[16,2,1,""],load_gzip:[16,2,1,""],save:[16,2,1,""],save_gzip:[16,2,1,""]},"gatenlp.serialization.default.MsgPackSerializer":{document2stream:[16,2,1,""],load:[16,2,1,""],save:[16,2,1,""],stream2document:[16,2,1,""]},"gatenlp.serialization.default.PlainTextSerializer":{load:[16,2,1,""],load_gzip:[16,2,1,""],save:[16,2,1,""],save_gzip:[16,2,1,""]},"gatenlp.serialization.default.YamlSerializer":{load:[16,2,1,""],load_gzip:[16,2,1,""],save:[16,2,1,""],save_gzip:[16,2,1,""]},"gatenlp.utils":{match_substrings:[18,3,1,""],to_dict:[18,3,1,""],to_list:[18,3,1,""]},gatenlp:{Annotation:[0,1,1,""],AnnotationSet:[0,1,1,""],ChangeLog:[0,1,1,""],Document:[0,1,1,""],GateNlpPr:[0,3,1,""],InvalidOffsetException:[0,4,1,""],annotation:[1,0,0,"-"],annotation_set:[2,0,0,"-"],changelog:[3,0,0,"-"],document:[4,0,0,"-"],exceptions:[5,0,0,"-"],feature_bearer:[6,0,0,"-"],gate_interaction:[7,0,0,"-"],gateslave:[8,0,0,"-"],impl:[9,0,0,"-"],lib_spacy:[11,0,0,"-"],lib_stanfordnlp:[12,0,0,"-"],lib_stanza:[13,0,0,"-"],offsetmapper:[14,0,0,"-"],serialization:[15,0,0,"-"],utils:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"abstract":[0,4],"boolean":[0,2,3,18],"byte":[0,4,16],"case":[0,2,3,11,12,13,14,18],"class":[0,1,2,3,4,6,7,8,10,14,16],"default":[0,2,3,4,6,11,12,13,15],"function":[0,2,7,10,16,18],"import":[0,4,8],"int":[0,1,2,4,6],"new":[0,1,2,3,4,11,12,13],"return":[0,1,2,3,4,6,7,8,10,11,12,13,14,16,18],"static":[0,1,2,3,4,8,16],"transient":[0,4],"true":[0,1,2,3,6,8,11,13,16,18],For:[0,4,17],NOT:[0,2,4,6],The:[0,2,4,6,7,18],Use:8,__deepcopy__:[0,2],_log_feature_chang:6,abc:[0,2],about:[0,1],accept:[0,2],access:[0,4],accordingli:[0,4],accumul:8,acess:[0,4],action:[0,3],activ:[0,4],actual:[0,4],add:[0,1,2,4,10,11,12,13],add_ann:[0,2],add_dep:11,add_ent:[11,13],add_handl:[0,3],add_nounchunk:11,add_sent:11,add_spacetoken:11,add_token:11,added:[0,2,3,6,11,12,13],addit:[0,1,3,4,6],affect:[0,2],after:[0,1,2,8,10,14],against:[0,2],algorithm:9,all:[0,1,2,3,4,6,8,10,14,18],allow:[0,2,4,8,10],almost:[0,1],alreadi:[0,3,4,11,12,13,18],also:[0,2,4,7,8,10],alwai:[0,1,3,4],ani:[0,2,3,4,6,13],ann:[0,2],annid:[0,1,2],annorannid:[0,2],annot:[0,2,3,4,10,11,12,13,16,19],annot_id:[0,1],annot_typ:[0,1],annotation_set:[0,1,4,19],annotationset:[0,2,4],annset:[0,2],anntoat:[11,12,13],anntyp:[0,2],anoth:6,anymor:8,anyth:[0,4,8],api:[6,8],append:[0,3],appli:[0,4,6],applic:8,apply_chang:[0,4],apply_spaci:11,apply_stanfordnlp:12,apply_stanza:13,appropri:8,arbitrari:[0,2],arg:[0,1,2,7],argument:[0,4,6,18],arrai:[0,3],as_arrai:[0,3],assign:[0,2],assum:[0,2],attach:[0,2],attribut:6,automat:[0,2,16],avail:0,back:[0,3,4],base:[0,1,2,3,4,5,6,7,8,10,14,16,17],basic:10,bdocj:[0,4],bear:6,bearer:[0,1,4,6],becaus:8,been:[0,1,2,4,8],befor:[0,1,2,10,16],belong:[0,2],better:9,between:[0,1,7,8],big:8,biggest:[0,2,10],binari:8,bool:[0,1,2,6],both:[0,1],build:[0,2],by_offset:[0,2],by_span:[0,2],calcul:14,call:[0,3,7,8,18],callabl:[0,3],callback:[0,3,4],can:[0,1,2,3,4,6,7,18],cannot:[0,2,4,11],captur:8,caus:8,chang:[0,1,2,3,4,6],changelog:[0,2,4,6,19],charact:[0,1,8],check:[0,1,2],chlog:[0,4],chunk:11,classpath:8,classpath_sep:8,clazz:16,clean:8,clear:[0,2],clear_featur:6,clone:[0,2,8],clone_ann:[0,2],close:8,cmp:18,code:[0,2,4,14],codepoint:[0,4],coextens:[0,1,2],collect:[0,1,2,3,10],com:17,come:[0,2],command:[6,8],commun:8,compar:18,comparison:18,compat:5,complet:[0,2,4],compon:8,connect:8,consid:[0,4,18],construct:8,contain:[0,1,2,4,6,9,10,11,16,18],contains_offset:[0,1],content:[4,19],convers:14,convert:[0,3,4,8,11,12,13,14,16],convert_to_java:14,convert_to_python:14,copi:[0,1,2,4,6,13],correspond:[0,2],cost:14,could:[0,2,18],cover:[0,1,2,10],creat:[0,1,2,3,4,8,10,11,12,13,14],createdocu:8,creation:[0,4],current:[0,3,4,8,14],data:[8,10],datastructur:9,decor:[0,7],deep:[0,4,6],deepcopi:[0,1,2,4],defaultpr:7,defaultvalu:[0,4],defin:10,del_featur:6,del_gdoc:8,delet:8,deleteresourc:8,deliber:[0,4],deliberatli:[0,4],depend:[0,4,10,11],deseri:[0,3,4],desir:[0,3],destin:[0,4,8],detach:[0,2],detached_from:[0,2],determin:16,determine_load:16,dict:[0,2,3,4,6,13],dictionari:[0,3,4,6],dictrepr:[0,1,2,3,4],differ:[0,4],dir:8,directli:[0,1,4,8],discard:[10,14],distanc:[0,1],doc:[0,4,8,16],document2stream:16,document:[0,2,3,8,11,12,13,16,19],doe:[0,2,3,4,6,8,18],done:[0,1],down:8,download:8,dummi:[0,2],each:[0,2,8,18],eat:8,edit:[0,4],either:[0,2,3,4,8,11,18],element:8,els:13,empti:[0,2,4,11,12,13],encod:16,end:[0,1,2,8,10,13,18],ending_aft:10,ending_at:10,ending_to:10,ent_prefix:13,entiti:[11,13],environ:8,equal:18,even:[0,4],everyth:[8,13],exactli:[0,1],exampl:8,except:[0,1,2,4,18,19],exchang:8,exist:[0,2,4,6,8,10],expect:[0,2,8,18],explos:17,ext:16,extens:[0,4],extern:16,fall:[0,1,2],fals:[0,1,2,3,6,7,8,10,16,18],fashion:18,fast:[0,2],fast_it:[0,2],fastinfoset:8,featur:[0,1,2,4,6],feature_bear:[0,1,4,19],feature_nam:6,feature_valu:6,featurebear:[0,1,4,6],featuremap:[0,4],featurenam:6,features_copi:6,featureview:[0,4,6],field:[0,1,4],file:[0,3,4,7,17],filespec:16,filter:[0,2],find:14,finish:7,first:[0,1,2,10],fix:[0,2],fixup_chang:[0,3],flag:14,fly:[0,4],fmt:[0,3,4,16],follow:8,format:[0,3,4,17],format_bdoc:8,format_to:[0,3],found:[0,2],free:[0,2],frequent:[0,2],from:[0,2,4,6,8,11,12,13,16,18],from_dict:[0,1,2,3,4],from_ext:16,from_main:7,from_mem:16,fulli:10,gap:[0,1],gate:[0,4,5,7,8],gate_classpath:8,gate_hom:8,gate_interact:[0,19],gatehom:8,gatenlpdoc:[11,12,13],gatenlppr:0,gateslav:[0,19],gatexmlload:16,gather:5,gdoc2pdoc:8,gdoc:8,gener:[0,2],gep:[0,1],get:[0,2,3,4,7,8,9,11,12,13],get_annot:[0,4],get_annotation_set_nam:[0,4],get_argu:7,get_bytes_from_url:16,get_changelog_load:16,get_changelog_sav:16,get_document_load:16,get_document_sav:16,get_featur:[0,4,6],get_handl:16,get_str_from_url:16,getstr:18,git:8,github:[13,17],given:[0,1,2,3,4,6,8,10,13],going:[0,2],greedi:18,gui:8,gzip:16,hack:8,handl:[0,2,7,8],handle_existing_ann:[0,4],handler:[0,3,16],has:[0,1,2,3,4,6,8,13],has_featur:6,have:[0,2,4,6,7,10,16],here:10,highest:[0,2],host:8,html5lib:16,html:[0,4,16],htmlannviewerseri:16,htmlloader:16,http:[0,4,7,13,16,17],ident:[0,2,14],identifi:[0,1,7],ids:[0,2],ignor:[0,2],ignore_unknown_typ:16,immut:[0,1,2,4],impl:[0,19],implement:[0,2,4,6,9,10,17],includ:[0,2,4],incur:10,independ:[0,1],index:[0,2,4],indic:[0,4,18],infer:[0,4],info:11,inform:[0,1,3,11],inherit:6,initi:[0,1,4,6],initialfeatur:[0,4,6],initialis:[0,4,6],insid:[0,1],inst:16,instal:8,instanc:[0,1,2,4,6,8],instead:[0,1,2,3,4,6,18],interact:[7,8],intern:[0,2,10],interpret:16,interv:10,invalidoffsetexcept:[0,5],invok:8,irang:10,is_aft:[0,1],is_befor:[0,1],is_coextens:[0,1],is_cov:[0,1],is_detach:[0,2],is_immut:[0,2],is_overlap:[0,1],is_url:16,is_within:[0,1],item:18,iter:[0,2,4,6,10,14],its:[0,2,6,18],itself:[0,1,6,10],java2python:14,java:[0,4,7,8,14],json:[0,3,4],jsonseri:16,just:[0,4,8,14],jvm:8,keep:[0,3,4],kei:[0,4,6,10,13],keyerror:[0,5],keysview:[0,2,4,6],keyword:[0,3,4,6],known:[0,2,4,11],kwarg:[0,1,2,3,4,6,7,16],largest:[0,2],last:[0,1,2,10],least:8,left:[0,2],legaci:[0,2],len:6,length:[0,4],let:8,lib_spaci:[0,19],lib_stanfordnlp:[0,19],lib_stanza:[0,19],librari:[5,9],like:[0,4,6],limit:[0,2],linux:8,list:[0,2,3,6,10,18],listen:[0,4],load:[0,3,4,8,16],load_gdoc:8,load_gzip:16,load_mem:[0,3,4],load_pdoc:8,load_rend:16,loader:[0,4],loadpipelinefromfil:8,log:[0,2,3,4],logger:6,lxml:16,maco:8,made:[0,4],mai:[0,4,6,8,9,10],maintan:10,make:[0,2,4],manipul:[0,4],map:[0,2,4,6,14],mapper:[0,3,4],markup:16,markup_set_nam:16,match:[0,2,18],match_substr:18,max_end:10,maximum:[0,2,10],maxoff:10,mayb:10,mean:[0,1],memnon:[0,4],memo:[0,2,4],memoiz:[0,4],memori:[0,4,8,14],method:[0,1,2,3,4,6,8,18],mime:[0,4,8],mimetyp:8,mimtetyp:8,min_start:10,minimum:[0,2,10],minoff:10,mixin:6,mod:[0,3,4],modif:[0,2],modifi:[0,3,4,11,12,13],modul:19,moment:[0,4],more:[0,2,3,4,8,10],msgpack:[0,3],msgpackseri:16,much:6,must:[0,1,6,7,8],mutabl:[0,1,2,4],name:[0,2,3,4,6,11,12,13,16],natur:[0,2],necessari:[0,2,3,4,6,8],ned:[0,3],need:[0,2,3,9,13],neg:[0,1],nest:13,never:[0,1],next:[0,2],nlp:[11,12,13],non_overlap:[0,2],none:[0,1,2,3,4,6,7,8,10,11,12,13,16,18],normal:[0,2,18],note:[0,1,2,3,4,8,10,14],notebook:16,noth:[0,3,4],noun:11,nounchunk:11,nounchunk_typ:11,now:17,num_featur:6,number:[0,2,4,6],obj:18,object:[0,2,3,4,6,7,8,10,14,16,18],offlin:16,offset:[0,1,2,3,4,10,14,18],offset_mapp:[0,1,3,16],offset_typ:[0,1,3,4,16],offset_type_java:[0,4],offset_type_python:[0,4],offsetmapp:[0,4,19],offsettyp:[0,4],onc:[0,1,2,4],one:[0,2,3,4,7,8,14,16],onli:[0,1,2,3,4,8,17],oper:[8,10],optim:[10,14],option:[0,2],order:[0,1,2,4,10,18],origin:[0,2,3,4,6,11,12,13,16],other:[0,1,2,6,9],otherwis:[0,1,2,3,4,8,11,12,13,16,18],otion:[0,2],our:[0,2,8],out:[0,3],output:[0,3,4,8,12,13],over:[0,2],overhead:10,overlap:[0,1,2,10,18],overrid:[0,3,16],own:[0,2,6,8],owner_doc:[0,2],owner_set:[0,1],packag:19,packat:9,pair:[0,4,6],param:[0,1,2,8,10,11,12,13,14,16],paramet:[0,1,2,3,4,6,8,11,12,13,16,18],pars:[0,4,16],parser:[11,16],part:[0,4,8],partial:[0,4],pass:[0,2,4,8],path:[0,4,8,16],pathlib:[0,4,16],pattern:[0,2],pdoc2gdoc:8,pdoc:8,perform:8,pickl:[0,3],pipe:7,pipelin:[8,11,12,13],place:[0,4,11,12,13],placehold:17,plaintextseri:16,platform:8,plu:[0,2],plugin:[7,8],point:[0,4,14],port:8,possibl:[0,2,4,8],pprint:[0,3],prefix:[0,3,13],prepar:[0,3,13],present:[0,4,18],pretti:[0,3],previous:[0,4],print:[0,3],problem:8,process:[0,2,7,8],process_soup:16,properti:[0,1,2,4],provid:[0,2,6,11,12,13],prwrapper:0,python:[0,3,4,7,8,14],pythonslav:8,queri:[0,2],rais:[0,2,18],rang:[0,2,10],read:16,realli:[0,2],receiv:[0,3,11],record:[0,4],reduc:7,refer:[0,3,8],reflect:[0,4],regist:[0,3],relev:[0,8],remov:[0,2,4,6,8,10],remove_annotation_set:[0,4],replac:[0,2,3,9,18],repo:8,repres:[0,1,4,6,10,16],represent:[0,4],requir:[0,4],resourc:[0,7,16],restrict:[0,2],restrict_to:[0,2],result:[0,2,10,18],resultlist:7,retriev:[0,2,18],retur:[0,3],rever:[0,2],revers:[0,2,10],reverse_it:[0,2],run4doc:8,run:[8,11,12,13,16],same:[0,1,2,6],save:[0,3,4,8,16],save_gdoc:8,save_gzip:16,save_mem:[0,3,4],saveload:16,saver:[0,4],second:[0,1,18],see:13,seen:[0,2],select:[0,2],sentenc:[11,12,13],sentence_typ:[11,12,13],separ:[0,4,7,8,9],seper:8,sequenc:[0,1,4,18],serial:[0,3,4,19],serialis:[0,4],set:[0,1,2,3,4,6,8,10,11,12,13,14,16],set_changelog:[0,4],set_featur:[0,4,6],set_immut:[0,2],setnam:[11,12,13],sever:[0,2,3,4,18],shallow:[0,4,6],should:[0,1,2,3,4,6,7,10,11,16,18],show:8,show_gui:8,shut:8,side:8,signific:10,simpl:10,sinc:6,singl:[0,3,4,14],size:[0,1,2,4],slave:8,smallest:[0,2,10],some:[8,9,10,16],someth:[0,3,4,6,16],somewher:[0,1],sort:[0,2,10],sortedintvl:[0,9],soup:16,sourc:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,16,18],space:11,spacetoken:11,spacetoken_typ:11,spaci:11,spacy2gatenlp:11,spacydoc:11,span:[0,1,2,4],special:14,specif:[0,4],specifi:[0,2,4],speed:14,srsly:[0,15],stabl:10,standard:10,stanford:[12,13],stanfordnlp2gatenlp:12,stanfordnlp:[12,13],stanfordnlpdoc:12,stanza2gatenlp:13,stanza:13,stanzadoc:13,start:[0,1,2,4,7,8,10,13,18],start_eq:[0,2],start_g:[0,2],start_lt:[0,2],start_min_g:[0,2],starting_at:10,starting_befor:10,starting_from:10,stderr:8,stdout:[0,3],still:[0,2],store:[0,2,3,4,10],str:[0,1,2,4,6,14],stream2docu:16,stream:[0,3,16],stricter:10,string:[0,3,4,8,11,12,13,14,16,18],submodul:19,subpackag:[9,19],substr:18,successfulli:8,sum:18,support:[0,4,7,8,11,12,13,17],sure:[0,2],sync:8,sys:[0,3],system:[7,8],tabl:14,take:[0,3],target:[0,4],temporari:9,text:[0,1,2,4,8,14,18],than:[0,2],thei:18,them:[0,2,4],thepipelin:8,thi:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,18],those:[0,2],through:[0,2],time:[0,4],to_dict:[0,1,2,3,4,18],to_ext:16,to_list:18,to_mem:16,to_offset_typ:[0,4],todo:10,togeth:5,tok2tok:13,tok:13,token:[11,12,13],token_typ:[11,12,13],transfer:[11,12,13],treat:[0,4],tri:[0,4],tupl:[0,2,4,6,10,18],tupleiter:10,turn:6,two:[0,1,18],type:[0,1,2,3,4,8,11,12,13],type_nam:[0,2],unicd:[0,4],unicod:[0,4,14],union:[0,2,6],uniqu:[0,1],unit:[0,4,14],unknown:[0,2],unload:8,unmatch:18,unspecifi:[0,2],updat:[0,3,6,10],update_featur:6,url:[0,4,16],urllib:[0,4],use:[0,2,3,4,6,8,10,11,12,13,18],used:[0,1,2,4,6,8,11,12,13,18],useful:[6,18],user:7,uses:[7,10],using:[0,3,4,8,10,11,12,13],usual:[0,2],utf16:14,utf:[0,4],util:[0,19],val:[0,2],valu:[0,2,4,6],variabl:8,variou:18,view:[0,4,6],wai:[0,2,4],websocket:7,well:13,what:[0,2,4,13,16],when:[0,3,4,6,8],where:[0,2,4,8,10,18],wherefrom:[0,3],whereto:[0,3],which:[0,1,2,4,6,10,11,12,13,18],window:8,with_typ:[0,2],within:[0,1,2,10],without:18,word:12,word_typ:12,work:[0,2],would:[0,2,16],wrapper:0,write:[0,3,4],xgapp:8,xml:[8,16],yamlseri:16,yet:[0,2]},titles:["gatenlp package","gatenlp.annotation module","gatenlp.annotation_set module","gatenlp.changelog module","gatenlp.document module","gatenlp.exceptions module","gatenlp.feature_bearer module","gatenlp.gate_interaction module","gatenlp.gateslave module","gatenlp.impl package","gatenlp.impl.sortedintvls module","gatenlp.lib_spacy module","gatenlp.lib_stanfordnlp module","gatenlp.lib_stanza module","gatenlp.offsetmapper module","gatenlp.serialization package","gatenlp.serialization.default module","gatenlp.serialization.srsly module","gatenlp.utils module","gatenlp"],titleterms:{"default":16,annot:1,annotation_set:2,changelog:3,content:[0,9,15],document:4,except:5,feature_bear:6,gate_interact:7,gatenlp:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],gateslav:8,impl:[9,10],lib_spaci:11,lib_stanfordnlp:12,lib_stanza:13,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],offsetmapp:14,packag:[0,9,15],serial:[15,16,17],sortedintvl:10,srsly:17,submodul:[0,9,15],subpackag:0,util:18}})