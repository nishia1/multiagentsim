# Minions v Monkeys
I'm a big fan of asking stupid questions, things like what would have happened if I was transformed into a taco or what would happen if a monkey met a minion all while trying to eat a banana? Anarchy, right!

Most of these questions are ones rooted in things that I can't really explore using my software toolkit. This one however is another case. What happens when you put two adversial swarms of agents in the room and force them to fight over a shared resource? And what happens when said swarms follow their own internal strategies, turning this from a 1v1 into something far more evolved where we now have two agent swarms collecting and guarding resources while internal strife ensues?

# Motivation
Now, don't get me wrong, I'm no biologist or deeply passionate about swarming animals. However, what does fascinate me is the idea that we are getting increasingly closer to living in a world where this is a possibility. Anything from fleets of drones, to multiple generalist humanoids sharing a household, to an LLM agent quietly trying to survive by sniping compute from other users like the ones being set in the wild right now could end up running some version of the same strategies. I was curious how I could apply (to be very frank) my brainrot to actually studied simulation systems and that's what inspired this dashboard!

# References
The design leans on a few existing models of competing agents and scarce resources:
- Sugarscape (Epstein & Axtell, Growing Artificial Societies, 1996): the original "agents on a grid competing for a regenerating resource" setup. Bananas here are basically sugar with better branding.
- Boids (Reynolds, 1987): three dead-simple local rules (separation, alignment, cohesion) that produce real flocking with no leader. This is where the monkeys' "Swarm" strategy comes from.
- Lotka-Volterra equations (1925/1926): the classical predator-prey math for two populations locked in competition. Once there's real tick data, it'd be interesting to see how closely (or not) the agent-based results track what the differential equations predict.
- MADDPG (Lowe et al., NeurIPS 2017): multi-agent RL for mixed cooperative/competitive settings. Not implemented here, but the natural next step if fixed strategies get replaced with agents that learn their approach instead of following hardcoded rules.

# Current Progress
Currently more work has been on the UI as I have been researching and looking into the methods that already exist for modeling such programs! More to come :)
