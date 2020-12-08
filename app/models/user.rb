class User < ApplicationRecord

    validates_uniqueness_of :username

    def self.generate
        adjectives = ['Windswept', 'Monolithic', 'Gleeful', 'Barbaric', 'Glowing', 'Charming', 'Shiny', 'Mysterious']
        nouns = ['Heath', 'Boulder', 'Imp', 'Troll', 'Dragon', 'Warrior', 'Sorceress', 'Witch', 'Goblin']
        number = rand.to_s[2..4]
        username = "#{adjectives.sample}-#{nouns.sample}-#{number}"
        create(username: username)
    end
end
