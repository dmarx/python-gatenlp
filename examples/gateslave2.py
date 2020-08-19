#!/usr/bin/env python

from gatenlp.gateslave import GateSlave

gs = GateSlave()

doc1 = gs.slave.createDocument("This is a 💩 document. It mentions Barack Obama and George Bush and New York.")
print("GATE Document:", doc1)

pdoc = gs.gdoc2pdoc(doc1)
print("Python gatenlp document:", pdoc)

gs.slave.loadMavenPlugin("uk.ac.gate.plugins","annie","8.6")
pipeline = gs.slave.loadPipelineFromPlugin("uk.ac.gate.plugins", "annie", "/resources/ANNIE_with_defaults.gapp")

gs.slave.run4Document(pipeline, doc1)
print("GATE Document after ANNIE:", doc1)

pdoc = gs.gdoc2pdoc(doc1)
print("Python gatenlp document after ANNIE:", pdoc)

anns = pdoc.annset()

tokens = anns.type("Token")
print(f"Got {len(tokens)} tokens")

persons = anns.type("Person")
print(f"Got {len(persons)} Person annotations:")
for ann in persons:
    print(f"- {pdoc[ann]} from {ann.start} to {ann.end}")

gs.slave.saveDocumentToFile(doc1, "tmp_saveddoc.xml", "")

pdoc.save("tmp_saveddoc.bdoc")

gs.close()
